import { createComment, deleteComment } from "@/service/post";
import {
  CreateCommentPayload,
  DeleteCommentPayload,
} from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const createCommentRequest: CreateCommentPayload = await request.json();

  return createComment(createCommentRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const commentId = searchParams.get("commentId");

  const deleteCommentRequest: DeleteCommentPayload = {
    postId: postId || "",
    commentId: commentId || "",
  };

  return deleteComment(deleteCommentRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
