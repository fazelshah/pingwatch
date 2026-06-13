import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import sslChecker from "ssl-checker";

import {
  sendDownAlert,
  sendRecoveryAlert,
  sendSSLAlert,
} from "@/lib/email";

export async function GET() {
  const { data: monitors, error } = await supabase
    .from("monitors")
    .select("*");

  if (error) {
    return NextResponse.json({
      error: error.message,
    });
  }

  for (const monitor of monitors || []) {
    try {
      let url = monitor.url;

      if (
        !url.startsWith("http://") &&
        !url.startsWith("https://")
      ) {
        url = `https://${url}`;
      }

      const start = Date.now();

      const response = await fetch(url);

      const responseTime = Date.now() - start;

      const hostname = new URL(url).hostname;

      const ssl = await sslChecker(hostname);

      const newStatus = response.ok
        ? "UP"
        : "DOWN";

      // DOWN ALERT
      if (
        newStatus === "DOWN" &&
        !monitor.alert_sent &&
        monitor.alert_email
      ) {
        await sendDownAlert(
          monitor.alert_email,
          monitor.url
        );

        await supabase
          .from("monitors")
          .update({
            alert_sent: true,
          })
          .eq("id", monitor.id);
      }

      // RECOVERY ALERT
      if (
        newStatus === "UP" &&
        monitor.alert_sent &&
        monitor.alert_email
      ) {
        await sendRecoveryAlert(
          monitor.alert_email,
          monitor.url
        );

        await supabase
          .from("monitors")
          .update({
            alert_sent: false,
          })
          .eq("id", monitor.id);
      }

      // SSL EXPIRY ALERT
      if (
        ssl.daysRemaining <= 30 &&
        !monitor.ssl_alert_sent &&
        monitor.alert_email
      ) {
        await sendSSLAlert(
          monitor.alert_email,
          monitor.url,
          ssl.daysRemaining
        );

        await supabase
          .from("monitors")
          .update({
            ssl_alert_sent: true,
          })
          .eq("id", monitor.id);
      }

      await supabase
        .from("monitors")
        .update({
          status: newStatus,
          response_time: responseTime,
          ssl_days_remaining:
            ssl.daysRemaining,
          last_checked:
            new Date().toISOString(),
        })
        .eq("id", monitor.id);

    } catch (err) {
      console.error(
        "Check failed:",
        monitor.url,
        err
      );

      // DOWN ALERT ON EXCEPTION
      if (
        !monitor.alert_sent &&
        monitor.alert_email
      ) {
        try {
          await sendDownAlert(
            monitor.alert_email,
            monitor.url
          );

          await supabase
            .from("monitors")
            .update({
              alert_sent: true,
            })
            .eq("id", monitor.id);
        } catch (emailError) {
          console.error(
            "Email send failed:",
            emailError
          );
        }
      }

      await supabase
        .from("monitors")
        .update({
          status: "DOWN",
          last_checked:
            new Date().toISOString(),
        })
        .eq("id", monitor.id);
    }
  }

  return NextResponse.json({
    success: true,
  });
}
