import { getSearchPostsAll } from "@/service/post";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "";
  const page = Number(searchParams.get("page")) || 0;
  const limit = 5;
  let offset = (page - 1) * limit;

  console.log("searchParams", searchParams);

  return getSearchPostsAll(
    {
      keyword,
    },
    limit,
    offset
  )
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
