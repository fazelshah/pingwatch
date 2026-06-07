import { NextRequest, NextResponse } from "next/server";
import sslChecker from "ssl-checker";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({
      error: "URL is required",
    });
  }

  try {
    const start = Date.now();

    const response = await fetch(url);

    const responseTime = Date.now() - start;

    const hostname = new URL(url).hostname;

    const ssl = await sslChecker(hostname);

    return NextResponse.json({
      website: url,
      status: response.ok ? "UP" : "DOWN",
      statusCode: response.status,
      responseTime,
      sslValid: ssl.valid,
      sslDaysRemaining: ssl.daysRemaining,
      checkedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      website: url,
      status: "DOWN",
    });
  }
}
