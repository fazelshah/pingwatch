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

  const { name, url, email } = body;

  const { data, error } = await supabase
    .from("monitors")
    .insert([
      {
        name,
        url,
        email,
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
