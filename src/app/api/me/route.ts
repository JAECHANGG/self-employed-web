import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/service/user";
import { authOptions } from "../auth/[...nextauth]/route";
import { updateMe } from "@/service/me";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getUserById(user.id).then((data) => NextResponse.json(data));
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const form = await req.formData();
  const text = form.get("text")?.toString();
  const file = form.get("file") as File;

  if (!text || !file) {
    return new Response("Bad Request", { status: 400 });
  }

  // return updateMe(user.id, text, file).then((data) => NextResponse.json(data));
  return updateMe(user.id, text, file).then(
    () => new Response("Good Request", { status: 200 })
  );
}
