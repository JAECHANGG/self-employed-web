import { createReply, deleteReply } from "@/service/post";
import { CreateReplyPayload, DeleteReplyPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const createReplyRequest: CreateReplyPayload = await request.json();

  return createReply(createReplyRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const commentId = searchParams.get("commentId");
  const replyId = searchParams.get("replyId");

  const deleteReplyRequest: DeleteReplyPayload = {
    postId: postId || "",
    commentId: commentId || "",
    replyId: replyId || "",
  };

  return deleteReply(deleteReplyRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
