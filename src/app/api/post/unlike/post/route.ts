import { unlikePost } from "@/service/post";
import { UnlikePostPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const unlikePostRequest: UnlikePostPayload = await request.json();

  return unlikePost(unlikePostRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
