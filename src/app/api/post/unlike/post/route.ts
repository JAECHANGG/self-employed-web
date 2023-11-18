import { unlikePost } from "@/service/post";
import { UnlikePostPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const unlikePostRequest: UnlikePostPayload = await request.json();

  return unlikePost(unlikePostRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
