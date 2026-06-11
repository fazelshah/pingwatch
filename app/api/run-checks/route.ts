import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import sslChecker from "ssl-checker";

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

      await supabase
        .from("monitors")
        .update({
          status: response.ok ? "UP" : "DOWN",
          response_time: responseTime,
          ssl_days_remaining: ssl.daysRemaining,
          last_checked: new Date().toISOString(),
        })
        .eq("id", monitor.id);

    } catch (err) {
      console.error("Check failed:", monitor.url, err);

      await supabase
        .from("monitors")
        .update({
          status: "DOWN",
          last_checked: new Date().toISOString(),
        })
        .eq("id", monitor.id);
    }
  }

  return NextResponse.json({
    success: true,
  });
}
