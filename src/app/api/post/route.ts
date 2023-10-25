import { NextResponse } from "next/server";
import { getPost } from "../../../service/post";

export async function GET() {
  return getPost().then((data) => NextResponse.json(data));
}
