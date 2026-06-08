import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("monitors")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json([]);
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { name, url } = body;

  const { data, error } = await supabase
    .from("monitors")
    .insert([
      {
        name,
        url,
        interval_minutes: 1,
        status: "UP",
      },
    ]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
