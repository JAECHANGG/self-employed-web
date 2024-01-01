import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";
import { getPostsByCategory } from "../../../../../service/post";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  const { slug: category } = context.params;
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 0;
  const limit = 5;
  let offset = (page - 1) * limit;

  return getPostsByCategory(category, limit, offset)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
