import { deletePost, getPostById } from "@/service/post";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  const { slug: id } = context.params;
  return getPostById(id).then((data) => NextResponse.json(data));
}

export async function DELETE(request: NextRequest, context: Context) {
  const { slug: id } = context.params;

  return deletePost(id)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
