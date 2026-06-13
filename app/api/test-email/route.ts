// app/api/test-email/route.ts

import { NextResponse } from "next/server";
import { sendDownAlert } from "@/lib/email";

export async function GET() {
  await sendDownAlert(
    "fazelshah1@gmail.com",
    "https://google.com"
  );

  return NextResponse.json({ success: true });
}
