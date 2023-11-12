import dbConnect from "@/util/database";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  console.log("test");
  return NextResponse.json("test");
}
