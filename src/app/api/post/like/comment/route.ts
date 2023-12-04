import { likeComment } from "@/service/post";
import { LikeCommentPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const likeCommentRequest: LikeCommentPayload = await request.json();

  return likeComment(likeCommentRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
