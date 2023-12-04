import { increaseView } from "@/service/post";
import { IncreaseViewPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const increaseViewRequest: IncreaseViewPayload = await request.json();

  return increaseView(increaseViewRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
