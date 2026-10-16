import { Application } from "../models/Application.js";
import { Interviewer } from "../models/Interviewer.js";
import { Job } from "../models/Job.js";
import { sendInterviewerReminderEmail } from "../utils/interviewEmailService.js";

/**
 * Parses interview date string (YYYY-MM-DD or ISO) and interview time string (e.g. "11:00 AM" or "14:30")
 * into a local Date object.
 */
export function getInterviewDateTime(interviewDate, interviewTime) {
  if (!interviewDate || !interviewTime) return null;

  try {
    const dateStr = String(interviewDate).split("T")[0];
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return null;

    const match = String(interviewTime).trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
    if (!match) return null;

    let [_, hStr, mStr, ampm] = match;
    let hours = parseInt(hStr, 10);
    const minutes = parseInt(mStr, 10);

    if (ampm) {
      if (ampm.toUpperCase() === "PM" && hours < 12) hours += 12;
      if (ampm.toUpperCase() === "AM" && hours === 12) hours = 0;
    }

    return new Date(year, month - 1, day, hours, minutes, 0, 0);
  } catch (err) {
    console.error("[Reminder Service] Error parsing date/time:", err);
    return null;
  }
}

/**
 * Returns reminder offset in milliseconds based on the selected reminder setting.
 */
export function getReminderOffsetMs(reminderText) {
  if (!reminderText || reminderText === "none") return null;

  const lower = String(reminderText).toLowerCase();
  if (lower.includes("15 min")) return 15 * 60 * 1000;
  if (lower.includes("30 min")) return 30 * 60 * 1000;
  if (lower.includes("1 hour")) return 60 * 60 * 1000;
  if (lower.includes("2 hour")) return 2 * 60 * 60 * 1000;
  if (lower.includes("1 day")) return 24 * 60 * 60 * 1000;

  return 60 * 60 * 1000; // Default: 1 hour
}

/**
 * Core worker function that scans pending interview rounds and sends reminders.
 */
export async function checkUpcomingInterviewReminders() {
  try {
    const applications = await Application.find({
      status: { $nin: ["Rejected"] },
      "interviewRounds.0": { $exists: true },
    })
      .populate("jobId", "title department location")
      .populate("interviewRounds.interviewerId", "name email phone role interviewType");

    if (!applications || applications.length === 0) return;

    const now = Date.now();

    for (const app of applications) {
      let isUpdated = false;

      for (const round of app.interviewRounds) {
        // Only active rounds with reminder enabled and not yet sent
        if (
          !["Scheduled", "Rescheduled"].includes(round.status) ||
          round.isReminderSent === true ||
          round.interviewerReminder === "none"
        ) {
          continue;
        }

        const interviewDate = getInterviewDateTime(round.interviewDate, round.interviewTime);
        if (!interviewDate) continue;

        const interviewTimeMs = interviewDate.getTime();
        const offsetMs = getReminderOffsetMs(round.interviewerReminder);
        if (!offsetMs) continue;

        const reminderTriggerTimeMs = interviewTimeMs - offsetMs;

        // If interview has already concluded in the past, do not send reminder and do not mark as sent
        if (now >= interviewTimeMs + 15 * 60 * 1000) {
          continue;
        }

        // If current time has reached or passed the reminder trigger time
        if (now >= reminderTriggerTimeMs) {
          const interviewer = round.interviewerId;
          const job = app.jobId;

          // Mark as sent immediately to prevent duplicate sends on fast loops
          round.isReminderSent = true;
          round.reminderSentAt = new Date();
          isUpdated = true;

          if (!app.activities) app.activities = [];
          app.activities.unshift({
            type: "reminder_sent",
            title: `Reminder Sent: ${round.roundName}`,
            description: `Automated reminder (${round.interviewerReminder}) sent to interviewer ${
              interviewer?.name || "Panel"
            } (${interviewer?.email || "N/A"}).`,
          });

          // Dispatch reminder email asynchronously
          if (interviewer?.email) {
            sendInterviewerReminderEmail({
              application: app,
              job,
              interviewer,
              round,
            }).catch((mailErr) => {
              console.error("[Reminder Service] Failed to dispatch reminder email:", mailErr);
            });
          } else {
            console.warn(
              `[Reminder Service] No email found for interviewer in round "${round.roundName}" (Candidate: ${app.fullName})`
            );
          }
        }
      }

      if (isUpdated) {
        await app.save();
      }
    }
  } catch (error) {
    console.error("[Reminder Service] Error in checkUpcomingInterviewReminders:", error);
  }
}

/**
 * Initializes and starts the background reminder scheduler.
 */
export function startReminderScheduler() {
  console.log("⏰ [Reminder Service] Interview Reminder Scheduler active (polling every 30 seconds)");

  // Run initial check after 2 seconds to allow DB connection to stabilize
  setTimeout(() => {
    checkUpcomingInterviewReminders();
  }, 2000);

  // Poll every 30 seconds
  const intervalId = setInterval(checkUpcomingInterviewReminders, 30 * 1000);
  return intervalId;
}
