import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("monitors")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({
      error: error.message,
    });
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const {
    name,
    url,
    email,
    alert_email,
  } = body;

  // Free plan limit (5 monitors)
  const {
    data: existingMonitors,
    error: countError,
  } = await supabase
    .from("monitors")
    .select("id")
    .eq("email", email);

  if (countError) {
    return NextResponse.json({
      error: countError.message,
    });
  }

  if ((existingMonitors?.length || 0) >= 2) {
    return NextResponse.json({
      error:
        "Free plan limit reached. Upgrade to Pro (₹299/month) for up to 50 monitors.",
    });
  }

  const { data, error } = await supabase
    .from("monitors")
    .insert([
      {
        name,
        url,
        email,
        alert_email,
        status: "UP",
        interval_minutes: 1,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({
      error: error.message,
    });
  }

  return NextResponse.json(data);
}
