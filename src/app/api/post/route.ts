import { CreatePostPayload, UpdatePostPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";
import { createPost, updatePost } from "../../../service/post";

export async function POST(request: NextRequest) {
  const createPostRequest: CreatePostPayload = await request.json();

  return createPost(createPostRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}

export async function PATCH(request: NextRequest) {
  const updatePostRequest: UpdatePostPayload = await request.json();

  return updatePost(updatePostRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
