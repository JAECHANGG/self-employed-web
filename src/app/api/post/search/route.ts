import { getSearchPostsAll } from "@/service/post";
import { CreatePostPayload, UpdatePostPayload } from "@/types/post/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "";
  const keyword = searchParams.get("keyword") || "";
  console.log(userId);
  console.log(keyword);

  return getSearchPostsAll({
    userId,
    keyword,
  })
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

// export async function POST(request: NextRequest) {
//   const createPostRequest: CreatePostPayload = await request.json();

//   return createPost(createPostRequest)
//     .then((data) => getBaseResponse(data))
//     .catch((error) => getErrorResponse(error));
// }

// export async function PATCH(request: NextRequest) {
//   const updatePostRequest: UpdatePostPayload = await request.json();

//   return updatePost(updatePostRequest)
//     .then((data) => getBaseResponse(data))
//     .catch((error) => getErrorResponse(error));
// }
