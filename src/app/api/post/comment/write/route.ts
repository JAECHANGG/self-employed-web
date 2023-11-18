import { createComment, deleteComment } from "@/service/post";
import {
  CreateCommentPayload,
  DeleteCommentPayload,
} from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const createCommentRequest: CreateCommentPayload = await request.json();

  return createComment(createCommentRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
