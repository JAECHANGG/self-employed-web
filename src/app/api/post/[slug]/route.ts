import { createComment, getPostById } from "@/service/post";
import { CreateCommentPayload } from "@/types/post/payload";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  // console.log("req", request);
  const { slug: id } = context.params;
  return getPostById(id).then((data) => NextResponse.json(data));
}

export async function PATCH(request: NextRequest) {
  const createCommentRequest: CreateCommentPayload = await request.json();
  console.log("createCommentRequest", createCommentRequest);

  return createComment(createCommentRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
