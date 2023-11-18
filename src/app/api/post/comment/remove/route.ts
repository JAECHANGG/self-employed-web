import { deleteComment } from "@/service/post";
import { DeleteCommentPayload } from "@/types/post/payload";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  const deleteCommentRequest: DeleteCommentPayload = await request.json();
  console.log("id@@@@@@@@@@@@", deleteCommentRequest);

  return deleteComment(deleteCommentRequest).then((data) =>
    data
      ? new Response("Good Response", { status: 200 })
      : new Response("Bad Response", { status: 500 })
  );
}
