import { CreatePostPayload } from "@/types/post/payload";
import { NextRequest, NextResponse } from "next/server";
import { createPost, deletePostsAll } from "../../../service/post";

export async function POST(request: NextRequest) {
  const createPostRequest: CreatePostPayload = await request.json();

  return createPost(createPostRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}

export async function DELETE() {
  return deletePostsAll().then((data) => NextResponse.json(data));
}
