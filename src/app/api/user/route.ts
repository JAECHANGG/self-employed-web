import { getUserById, updateUser } from "@/service/user";
import { UpdateUserPayload } from "@/types/user/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getUserById(user.id).then((data) => NextResponse.json(data));
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const { username }: UpdateUserPayload = await request.json();
  // const form = await request.formData();
  // const text = form.get("text")?.toString();
  // const file = form.get("file") as File;

  if (!username) {
    return new Response("Bad Request", { status: 400 });
  }

  // return updateUser(user.id, text, file).then((data) => NextResponse.json(data));
  return updateUser(user.id, username)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
