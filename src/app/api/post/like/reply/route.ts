import { likeReply } from "@/service/post";
import { LikeReplyPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const likeReplyRequest: LikeReplyPayload = await request.json();

  return likeReply(likeReplyRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
