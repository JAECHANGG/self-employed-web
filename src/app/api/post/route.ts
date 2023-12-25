import { CreatePostPayload, UpdatePostPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";
import { createPost, getAllPosts, updatePost } from "../../../service/post";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 0;
  const limit = 5;
  let offset = (page - 1) * limit;

  return getAllPosts(limit, offset)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function POST(request: NextRequest) {
  const createPostRequest: CreatePostPayload = await request.json();

  return createPost(createPostRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function PATCH(request: NextRequest) {
  const updatePostRequest: UpdatePostPayload = await request.json();

  return updatePost(updatePostRequest)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
