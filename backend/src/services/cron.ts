import { scheduleJob } from "node-schedule";

export default function cron() {
  try {
    // do any cron here
    scheduleJob("0 5 0 * * *", async () => {
      console.log("run schedule");
    });

    console.log("⏰: Cron job started");
  } catch (error) {
    console.log(error, "😭: Cron job error");
  }
}
