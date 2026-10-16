import { ContactLead } from "../models/ContactLead.js";
import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { Blog } from "../models/Blog.js";
import { CaseStudy } from "../models/CaseStudy.js";
import { Interviewer } from "../models/Interviewer.js";
import { LeadAssignee } from "../models/LeadAssignee.js";

/**
 * Helper to compute date range filter based on period query param
 */
const getDateFilter = (period) => {
  const now = new Date();
  if (period === "today") {
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return { createdAt: { $gte: start } };
  } else if (period === "7days") {
    const start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return { createdAt: { $gte: start } };
  } else if (period === "30days") {
    const start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    return { createdAt: { $gte: start } };
  } else if (period === "month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    return { createdAt: { $gte: start } };
  }
  return {};
};

/**
 * Controller to fetch comprehensive admin dashboard statistics
 */
export const getDashboardStats = async (req, res) => {
  try {
    const period = req.query.period || "all";
    const dateFilter = getDateFilter(period);

    // 1. Core KPIs Counts in parallel
    const [
      totalLeadsCount,
      allTimeLeadsCount,
      unviewedLeadsCount,
      leadStatusGroups,
      totalAppsCount,
      allTimeAppsCount,
      appStatusGroups,
      jobsCount,
      activeJobsCount,
      blogsCount,
      activeBlogsCount,
      caseStudiesCount,
      activeCaseStudiesCount,
      interviewersCount,
      leadAssigneesCount,
    ] = await Promise.all([
      ContactLead.countDocuments(dateFilter),
      ContactLead.countDocuments({}),
      ContactLead.countDocuments({ isViewed: false }),
      ContactLead.aggregate([
        { $match: dateFilter },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]),
      Application.countDocuments(dateFilter),
      Application.countDocuments({}),
      Application.aggregate([
        { $match: dateFilter },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]),
      Job.countDocuments({}),
      Job.countDocuments({ status: "active" }),
      Blog.countDocuments({}),
      Blog.countDocuments({ status: "active" }),
      CaseStudy.countDocuments({}),
      CaseStudy.countDocuments({ status: "active" }),
      Interviewer.countDocuments({ isActive: true }),
      LeadAssignee.countDocuments({ isActive: true }),
    ]);

    // Map lead status counts (treating undefined/null as "New")
    const leadStatusMap = {};
    leadStatusGroups.forEach((item) => {
      const statusKey = item._id || "New";
      leadStatusMap[statusKey] = (leadStatusMap[statusKey] || 0) + item.count;
    });

    const leadPipelineOrder = [
      "New",
      "Contacted",
      "Qualified",
      "Proposal Sent",
      "Negotiation",
      "Converted",
      "Lost",
      "Closed",
    ];

    const leadPipeline = leadPipelineOrder.map((status) => {
      const count = leadStatusMap[status] || 0;
      const percentage =
        totalLeadsCount > 0
          ? Math.round((count / totalLeadsCount) * 100)
          : 0;
      return { status, count, percentage };
    });

    const convertedLeads = leadStatusMap["Converted"] || 0;
    const leadConversionRate =
      totalLeadsCount > 0
        ? ((convertedLeads / totalLeadsCount) * 100).toFixed(1)
        : "0.0";

    const activeInPipeline =
      totalLeadsCount -
      (convertedLeads +
        (leadStatusMap["Lost"] || 0) +
        (leadStatusMap["Closed"] || 0));

    // Map application status counts (treating undefined/null as "Applied")
    const appStatusMap = {};
    appStatusGroups.forEach((item) => {
      const statusKey = item._id || "Applied";
      appStatusMap[statusKey] = (appStatusMap[statusKey] || 0) + item.count;
    });

    const appFunnelOrder = [
      "Applied",
      "Shortlisted",
      "Interviewing",
      "Selected",
      "Rejected",
    ];

    const applicationFunnel = appFunnelOrder.map((status) => {
      const count = appStatusMap[status] || 0;
      const percentage =
        totalAppsCount > 0
          ? Math.round((count / totalAppsCount) * 100)
          : 0;
      return { status, count, percentage };
    });

    const selectedApplicants = appStatusMap["Selected"] || 0;
    const selectionRate =
      totalAppsCount > 0
        ? ((selectedApplicants / totalAppsCount) * 100).toFixed(1)
        : "0.0";

    // 2. Fetch Attention Items:
    // (a) Inbound / New Leads: All open leads received in this period (or unviewed/New)
    const inboundLeadQuery = {
      ...dateFilter,
      $and: [
        {
          $or: [
            { isViewed: false },
            { status: "New" },
            { status: null },
            { status: { $exists: false } },
          ],
        },
        {
          status: { $nin: ["Converted", "Lost", "Closed"] },
        },
      ],
    };

    const inboundLeadsRaw = await ContactLead.find(inboundLeadQuery)
      .select("name email company subject status priority isViewed createdAt")
      .sort({ createdAt: -1 })
      .limit(6)
      .lean();

    const inboundLeads = inboundLeadsRaw.map((l) => ({
      ...l,
      status: l.status || "New",
    }));

    // (b) Upcoming Scheduled Interviews
    const applicationsWithScheduledRounds = await Application.find({
      "interviewRounds.status": "Scheduled",
    })
      .select("fullName email jobId interviewRounds")
      .populate("jobId", "title department")
      .populate("interviewRounds.interviewerId", "name email role")
      .lean();

    const upcomingInterviews = [];
    applicationsWithScheduledRounds.forEach((app) => {
      (app.interviewRounds || []).forEach((round) => {
        if (round.status === "Scheduled") {
          upcomingInterviews.push({
            applicationId: app._id,
            candidateName: app.fullName,
            candidateEmail: app.email,
            jobTitle: app.jobId?.title || "Position",
            roundName: round.roundName,
            roundNumber: round.roundNumber,
            interviewer: round.interviewerId?.name || "Assigned Interviewer",
            interviewDate: round.interviewDate,
            interviewTime: round.interviewTime,
            location: round.location,
            duration: round.duration,
          });
        }
      });
    });

    upcomingInterviews.sort((a, b) =>
      (a.interviewDate || "").localeCompare(b.interviewDate || "")
    );
    const topUpcomingInterviews = upcomingInterviews.slice(0, 5);

    // (c) Follow-ups due today or overdue
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    const followUpsDue = await ContactLead.find({
      nextFollowUpDate: { $lte: endOfToday, $ne: null },
      status: { $nin: ["Converted", "Lost", "Closed"] },
    })
      .select("name company subject nextFollowUpDate priority status")
      .sort({ nextFollowUpDate: 1 })
      .limit(5)
      .lean();

    // 3. Recent Inbound Leads (5 latest for this period)
    const recentLeadsRaw = await ContactLead.find(dateFilter)
      .select("name email company subject status priority approximateBudget dealValue assignedTo isViewed createdAt")
      .populate("assignedTo", "name role")
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const recentLeads = recentLeadsRaw.map((l) => ({
      ...l,
      status: l.status || "New",
    }));

    // 4. Recent Candidate Applications (5 latest for this period)
    const recentApplicationsRaw = await Application.find(dateFilter)
      .select("fullName email phone status jobId createdAt")
      .populate("jobId", "title department")
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const recentApplications = recentApplicationsRaw.map((a) => ({
      ...a,
      status: a.status || "Applied",
    }));

    // 5. Monthly Velocity Trend (Last 6 Months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);
    sixMonthsAgo.setHours(0, 0, 0, 0);

    const [leadMonthlyTrend, appMonthlyTrend] = await Promise.all([
      ContactLead.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: "$createdAt" },
              month: { $month: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
      ]),
      Application.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: "$createdAt" },
              month: { $month: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
      ]),
    ]);

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const monthlyTrends = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const monthLabel = `${monthNames[month - 1]} ${year.toString().slice(-2)}`;

      const leadMatch = leadMonthlyTrend.find(
        (m) => m._id.year === year && m._id.month === month
      );
      const appMatch = appMonthlyTrend.find(
        (m) => m._id.year === year && m._id.month === month
      );

      monthlyTrends.push({
        label: monthLabel,
        leads: leadMatch ? leadMatch.count : 0,
        applications: appMatch ? appMatch.count : 0,
      });
    }

    return res.status(200).json({
      success: true,
      period,
      kpis: {
        totalLeads: totalLeadsCount,
        allTimeLeads: allTimeLeadsCount,
        newLeads: leadStatusMap["New"] || 0,
        convertedLeads,
        leadConversionRate,
        unviewedLeadsCount,
        activeInPipeline: Math.max(0, activeInPipeline),

        totalApplications: totalAppsCount,
        allTimeApplications: allTimeAppsCount,
        appliedCount: appStatusMap["Applied"] || 0,
        shortlistedCount: appStatusMap["Shortlisted"] || 0,
        interviewingCount: appStatusMap["Interviewing"] || 0,
        selectedCount: selectedApplicants,
        rejectedCount: appStatusMap["Rejected"] || 0,
        selectionRate,
        scheduledInterviewsCount: upcomingInterviews.length,

        totalJobs: jobsCount,
        activeJobs: activeJobsCount,
        inactiveJobs: Math.max(0, jobsCount - activeJobsCount),

        totalBlogs: blogsCount,
        activeBlogs: activeBlogsCount,
        totalCaseStudies: caseStudiesCount,
        activeCaseStudies: activeCaseStudiesCount,

        activeInterviewers: interviewersCount,
        activeLeadAssignees: leadAssigneesCount,
      },
      leadPipeline,
      applicationFunnel,
      attentionItems: {
        inboundLeads,
        unviewedLeadsCount,
        upcomingInterviews: topUpcomingInterviews,
        followUpsDue,
      },
      recentLeads,
      recentApplications,
      monthlyTrends,
    });
  } catch (error) {
    console.error("[Dashboard Stats Error]:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to generate dashboard statistics",
      error: error.message,
    });
  }
};
