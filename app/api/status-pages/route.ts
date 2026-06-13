import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("status_pages")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return NextResponse.json({
      error: error.message,
    });
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { name, slug, user_email } =
    body;

  const { data, error } =
    await supabase
      .from("status_pages")
      .insert([
        {
          name,
          slug,
          user_email,
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
