import { increaseView } from "@/service/post";
import { IncreaseViewPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const increaseViewRequest: IncreaseViewPayload = await request.json();

  return increaseView(increaseViewRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
