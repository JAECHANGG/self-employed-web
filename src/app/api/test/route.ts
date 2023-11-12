import { NextResponse } from "next/server";
import dbConnect from "../../../util/database";

export async function GET() {
  await dbConnect();
  console.log("test");
  return NextResponse.json("test");
}
