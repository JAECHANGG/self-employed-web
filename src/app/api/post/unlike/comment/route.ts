import { unlikeComment } from "@/service/post";
import { UnlikeCommentPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const unlikeCommentRequest: UnlikeCommentPayload = await request.json();

  return unlikeComment(unlikeCommentRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
