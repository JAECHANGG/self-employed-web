import { deletePost, getPostById } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  const { slug: id } = context.params;
  return getPostById(id).then((data) => NextResponse.json(data));
}

export async function DELETE(request: NextRequest, context: Context) {
  const { slug: id } = context.params;

  return deletePost(id).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
