import { unlikeReply } from "@/service/post";
import { UnlikeReplyPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const unlikeReplyRequest: UnlikeReplyPayload = await request.json();

  return unlikeReply(unlikeReplyRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
