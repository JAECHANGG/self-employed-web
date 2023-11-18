import { unlikeComment } from "@/service/post";
import { UnlikeCommentPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const unlikeCommentRequest: UnlikeCommentPayload = await request.json();

  return unlikeComment(unlikeCommentRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
