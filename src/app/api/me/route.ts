import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "../../../service/user";
import { authOptions } from "../auth/[...nextauth]/route";
import { updateMe } from "@/service/me";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getUserByEmail(user.email).then((data) => NextResponse.json(data));
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const form = await req.formData();
  const text = form.get("text")?.toString();
  const file = form.get("file") as Blob;

  if (!text || !file) {
    return new Response("Bad REquest", { status: 400 });
  }

  return updateMe(user.id, text, file).then((data) => NextResponse.json(data));
}
