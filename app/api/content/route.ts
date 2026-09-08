import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

export async function GET(request: Request) {
  try {
    const data = await getContent();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}