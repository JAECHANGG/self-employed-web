import { likePost } from "@/service/post";
import { LikePostPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const likePostRequest: LikePostPayload = await request.json();

  return likePost(likePostRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
