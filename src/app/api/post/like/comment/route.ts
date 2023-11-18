import { likeComment } from "@/service/post";
import { LikeCommentPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const likeCommentRequest: LikeCommentPayload = await request.json();

  return likeComment(likeCommentRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
