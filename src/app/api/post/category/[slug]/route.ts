import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";
import { getAllPosts, getPostsByCategory } from "../../../../../service/post";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  const { slug: category } = context.params;

  return getPostsByCategory(category)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
