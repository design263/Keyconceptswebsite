import sendEmail from "../../sendEmail.js";

/**
 * Sends email notifications to both the candidate and the assigned interviewer
 * when an interview is scheduled or rescheduled.
 */
export async function sendInterviewNotificationEmails({
  application,
  job,
  interviewer,
  round,
  isRescheduled = false,
  reason = "",
}) {
  const brandColor = "#f1592a";
  const actionText = isRescheduled ? "Rescheduled" : "Scheduled";
  const badgeColor = isRescheduled ? "#d97706" : "#2563eb";

  const formattedDate = round.interviewDate
    ? new Date(round.interviewDate).toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : round.interviewDate;

  // 1. Candidate Email
  const candidateHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #ffffff;">
      <div style="background: linear-gradient(135deg, ${brandColor} 0%, #ff7a45 100%); padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Interview ${actionText}</h1>
        <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">Position: ${job?.title || "Career Opportunity"}</p>
      </div>

      <div style="padding: 24px 28px;">
        <p style="font-size: 15px; color: #1f2937; margin: 0 0 16px;">
          Dear <strong>${application.fullName}</strong>,
        </p>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 20px;">
          ${
            isRescheduled
              ? `Your interview for <strong>${job?.title || "the role"}</strong> has been <strong>rescheduled</strong>. Please find your updated interview details below:`
              : `We are pleased to invite you for the next round of interview for <strong>${job?.title || "the role"}</strong> at <strong>Key Concepts</strong>.`
          }
        </p>

        ${
          isRescheduled && reason
            ? `<div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 13px; color: #92400e;"><strong>Reschedule Reason:</strong> ${reason}</p>
              </div>`
            : ""
        }

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 14px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600;">Interview Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Round:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${round.roundName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Interviewer:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">${interviewer?.name || "Assigned Panel"} ${interviewer?.role ? `(${interviewer.role})` : ""}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Date:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Time:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${round.interviewTime} (IST)</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Duration:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">${round.duration || "45 mins"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Meeting / Location:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">
                ${
                  round.location.startsWith("http")
                    ? `<a href="${round.location}" target="_blank" style="color: ${brandColor}; font-weight: 600; text-decoration: underline;">Join Interview Link</a>`
                    : round.location
                }
              </td>
            </tr>
          </table>

          ${
            round.notes
              ? `<div style="margin-top: 14px; pt-3; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
                  <span style="font-size: 12px; color: #64748b; font-weight: 600;">Instructions / Notes:</span>
                  <p style="margin: 4px 0 0; font-size: 13px; color: #334155; white-space: pre-wrap;">${round.notes}</p>
                </div>`
              : ""
          }
        </div>

        ${
          round.location.startsWith("http")
            ? `<div style="text-align: center; margin-bottom: 24px;">
                <a href="${round.location}" target="_blank" style="display: inline-block; background-color: ${brandColor}; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(241, 89, 42, 0.2);">
                  Join Video Meeting
                </a>
              </div>`
            : ""
        }

        <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin: 0 0 16px;">
          Please ensure you have a stable internet connection and are in a quiet room 5 minutes prior to the scheduled time. If you have any questions, reply to this email.
        </p>

        <p style="font-size: 14px; color: #374151; margin: 20px 0 0;">
          Best regards,<br/>
          <strong>Hiring Team</strong><br/>
          Key Concepts
        </p>
      </div>

      <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          Key Concepts &bull; Empowering businesses through digital excellence.
        </p>
      </div>
    </div>
  `;

  // 2. Interviewer Email
  const interviewerHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #ffffff;">
      <div style="background: #1e293b; padding: 24px; text-align: center; color: #ffffff;">
        <span style="background-color: ${badgeColor}; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.5px;">Interview ${actionText}</span>
        <h1 style="margin: 10px 0 0; font-size: 20px; font-weight: 700;">Interview Assignment</h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">Candidate: ${application.fullName}</p>
      </div>

      <div style="padding: 24px 28px;">
        <p style="font-size: 15px; color: #1f2937; margin: 0 0 16px;">
          Hi <strong>${interviewer?.name || "Interviewer"}</strong>,
        </p>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 20px;">
          ${
            isRescheduled
              ? `The following interview round with <strong>${application.fullName}</strong> has been <strong>rescheduled</strong>:`
              : `You have been assigned to conduct an interview round for <strong>${application.fullName}</strong>:`
          }
        </p>

        ${
          isRescheduled && reason
            ? `<div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 13px; color: #92400e;"><strong>Reschedule Reason:</strong> ${reason}</p>
              </div>`
            : ""
        }

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 14px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600;">Schedule & Candidate Summary</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Candidate:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${application.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Email / Phone:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">${application.email} &bull; ${application.phone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Position:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${job?.title || "N/A"} (${job?.department || "General"})</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Round:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">${round.roundName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Date:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Time & Duration:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${round.interviewTime} (${round.duration || "45 mins"})</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;"><strong>Meeting Location:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">
                ${
                  round.location.startsWith("http")
                    ? `<a href="${round.location}" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">Join Interview Room</a>`
                    : round.location
                }
              </td>
            </tr>
          </table>

          ${
            round.notes
              ? `<div style="margin-top: 14px; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
                  <span style="font-size: 12px; color: #64748b; font-weight: 600;">Internal Notes:</span>
                  <p style="margin: 4px 0 0; font-size: 13px; color: #334155; white-space: pre-wrap;">${round.notes}</p>
                </div>`
              : ""
          }
        </div>

        ${
          round.location.startsWith("http")
            ? `<div style="text-align: center; margin-bottom: 24px;">
                <a href="${round.location}" target="_blank" style="display: inline-block; background-color: #1e293b; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  Open Meeting Link
                </a>
              </div>`
            : ""
        }

        <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin: 0;">
          Please update the admin dashboard or HR team after the interview concludes.
        </p>
      </div>

      <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          Admin Notification &bull; Key Concepts Recruitment System
        </p>
      </div>
    </div>
  `;

  // Dispatch both emails in parallel without breaking the caller if mail fails
  const results = await Promise.allSettled([
    // Candidate email
    sendEmail({
      to: application.email,
      subject: `Interview ${actionText}: ${round.roundName} - ${job?.title || "Key Concepts"}`,
      html: candidateHtml,
    }),
    // Interviewer email
    interviewer?.email
      ? sendEmail({
          to: interviewer.email,
          subject: `Interview Assignment (${actionText}): ${application.fullName} - ${round.roundName}`,
          html: interviewerHtml,
        })
      : Promise.resolve(null),
  ]);

  results.forEach((res, idx) => {
    const target = idx === 0 ? `Candidate (${application.email})` : `Interviewer (${interviewer?.email})`;
    if (res.status === "rejected") {
      console.error(`Failed to send interview notification email to ${target}:`, res.reason);
    } else {
      console.log(`Interview notification email sent to ${target}`);
    }
  });

  return results;
}

/**
 * Sends an automated reminder email to the interviewer for an upcoming interview round.
 */
export async function sendInterviewerReminderEmail({
  application,
  job,
  interviewer,
  round,
}) {
  if (!interviewer?.email) {
    console.warn(`[Reminder Service] No email found for interviewer ${interviewer?.name}`);
    return false;
  }

  const formattedDate = round.interviewDate
    ? new Date(round.interviewDate).toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : round.interviewDate;

  const reminderBadge = round.interviewerReminder || "Upcoming";
  const timeRemainingText = String(round.interviewerReminder || "15 mins").replace(/before/i, "").trim();

  const reminderHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #fed7aa; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); padding: 24px; text-align: center; color: #ffffff;">
        <span style="background-color: rgba(255, 255, 255, 0.25); color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; letter-spacing: 0.5px;">⏰ Interview Reminder &bull; ${reminderBadge}</span>
        <h1 style="margin: 10px 0 0; font-size: 22px; font-weight: 700;">Interview Starting Soon</h1>
        <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.95;">Candidate: ${application.fullName}</p>
      </div>

      <div style="padding: 24px 28px;">
        <p style="font-size: 15px; color: #1f2937; margin: 0 0 16px;">
          Hi <strong>${interviewer.name}</strong>,
        </p>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 20px;">
          This is a friendly reminder that your upcoming interview with <strong>${application.fullName}</strong> is scheduled for today at <strong>${round.interviewTime}</strong> (${round.duration || "45 mins"}), starting in approximately <strong>${timeRemainingText}</strong>.
        </p>

        <div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 14px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #c2410c; font-weight: 700;">Interview Summary</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #7c2d12; width: 140px;"><strong>Candidate:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${application.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #7c2d12;"><strong>Position:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${job?.title || "Open Position"} (${job?.department || "General"})</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #7c2d12;"><strong>Round:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${round.roundName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #7c2d12;"><strong>Date:</strong></td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #7c2d12;"><strong>Time & Duration:</strong></td>
              <td style="padding: 6px 0; color: #ea580c; font-weight: 700;">${round.interviewTime} (${round.duration || "45 mins"})</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #7c2d12;"><strong>Candidate Contact:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">${application.email} &bull; ${application.phone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #7c2d12;"><strong>Location / Link:</strong></td>
              <td style="padding: 6px 0; color: #0f172a;">
                ${
                  round.location.startsWith("http")
                    ? `<a href="${round.location}" target="_blank" style="color: #ea580c; font-weight: 600; text-decoration: underline;">Join Interview Room</a>`
                    : round.location
                }
              </td>
            </tr>
          </table>

          ${
            round.notes
              ? `<div style="margin-top: 14px; border-top: 1px dashed #fed7aa; padding-top: 10px;">
                  <span style="font-size: 12px; color: #c2410c; font-weight: 600;">Internal Notes:</span>
                  <p style="margin: 4px 0 0; font-size: 13px; color: #431407; white-space: pre-wrap;">${round.notes}</p>
                </div>`
              : ""
          }
        </div>

        ${
          round.location.startsWith("http")
            ? `<div style="text-align: center; margin-bottom: 24px;">
                <a href="${round.location}" target="_blank" style="display: inline-block; background-color: #ea580c; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 700; font-size: 14px; box-shadow: 0 2px 4px rgba(234, 88, 12, 0.3);">
                  Join Interview Room
                </a>
              </div>`
            : ""
        }

        <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin: 0;">
          Please join on time. Update the admin portal or HR panel with candidate status once the interview concludes.
        </p>
      </div>

      <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          Automated Reminder &bull; Key Concepts Recruitment System
        </p>
      </div>
    </div>
  `;

  try {
    await sendEmail({
      to: interviewer.email,
      subject: `Reminder: Upcoming Interview with ${application.fullName} (${round.roundName}) at ${round.interviewTime}`,
      html: reminderHtml,
    });
    console.log(`[Reminder Service] Reminder email sent to ${interviewer.name} (${interviewer.email})`);
    return true;
  } catch (err) {
    console.error(`[Reminder Service] Failed to send reminder email to ${interviewer.email}:`, err);
    return false;
  }
}

/**
 * Sends a formal congratulations / selection email to the candidate.
 */
export async function sendCandidateSelectionEmail({
  application,
  job,
  hrName = "HR Team",
  companyName = "Key Concepts Innovations Pvt. Ltd.",
}) {
  const candidateName = application.fullName;
  const jobTitle = job?.title || "Career Opportunity";
  const brandColor = "#16a34a"; // Elegant emerald green for congratulations

  const selectionHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #ffffff;">
      <div style="background: linear-gradient(135deg, ${brandColor} 0%, #15803d 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Congratulations! You Have Been Selected</h1>
        <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">${companyName}</p>
      </div>

      <div style="padding: 28px 32px;">
        <p style="font-size: 15px; color: #1f2937; margin: 0 0 16px;">
          Dear <strong>${candidateName}</strong>,
        </p>

        <p style="font-size: 15px; font-weight: 600; color: #16a34a; margin: 0 0 16px;">
          Congratulations!
        </p>

        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 16px;">
          We are pleased to inform you that you have been selected for the <strong>${jobTitle}</strong> position at <strong>${companyName}</strong>.
        </p>

        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 16px;">
          Thank you for your time and participation throughout the interview process. We look forward to having you join our team.
        </p>

        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 24px;">
          Our HR team will contact you regarding the joining date and further formalities.
        </p>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 24px;">
          <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0;">
            Best regards,<br />
            <strong>${hrName}</strong><br />
            HR Team<br />
            <strong>${companyName}</strong>
          </p>
        </div>
      </div>

      <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          &copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.
        </p>
      </div>
    </div>
  `;

  try {
    await sendEmail({
      to: application.email,
      subject: "Congratulations! You Have Been Selected",
      html: selectionHtml,
    });
    console.log(`[Selection Email] Congratulations email successfully dispatched to ${application.email}`);
    return true;
  } catch (err) {
    console.error(`[Selection Email] Error sending selection email to ${application.email}:`, err);
    return false;
  }
}

/**
 * Sends a formal interview rejection email to the candidate.
 * (Only sent on genuine rejection, not on ignore).
 */
export async function sendCandidateRejectionEmail({
  application,
  job,
  hrName = "HR Team",
  companyName = "Key Concepts Innovations Pvt. Ltd.",
}) {
  const candidateName = application.fullName;
  const jobTitle = job?.title || "Career Opportunity";
  const brandColor = "#475569"; // Professional slate tone for respectful closure

  const rejectionHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #ffffff;">
      <div style="background: linear-gradient(135deg, ${brandColor} 0%, #334155 100%); padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 700;">Application Update</h1>
        <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">${companyName}</p>
      </div>

      <div style="padding: 28px 32px;">
        <p style="font-size: 15px; color: #1f2937; margin: 0 0 16px;">
          Dear <strong>${candidateName}</strong>,
        </p>

        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 16px;">
          Thank you for your interest in the <strong>${jobTitle}</strong> position at <strong>${companyName}</strong> and for taking the time to participate in our interview process.
        </p>

        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 16px;">
          After careful consideration, we regret to inform you that we will not be proceeding with your application at this time.
        </p>

        <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 24px;">
          We appreciate your time and effort and wish you all the best in your future endeavors.
        </p>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 24px;">
          <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0;">
            Best regards,<br />
            <strong>${hrName}</strong><br />
            HR Team<br />
            <strong>${companyName}</strong>
          </p>
        </div>
      </div>

      <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          &copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.
        </p>
      </div>
    </div>
  `;

  try {
    await sendEmail({
      to: application.email,
      subject: `Update regarding your application for ${jobTitle} at ${companyName}`,
      html: rejectionHtml,
    });
    console.log(`[Rejection Email] Interview rejection email successfully dispatched to ${application.email}`);
    return true;
  } catch (err) {
    console.error(`[Rejection Email] Error sending rejection email to ${application.email}:`, err);
    return false;
  }
}


