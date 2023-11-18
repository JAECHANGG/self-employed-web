import { likePost } from "@/service/post";
import { LikePostPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const likePostRequest: LikePostPayload = await request.json();

  return likePost(likePostRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
