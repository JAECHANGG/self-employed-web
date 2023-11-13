import { NextRequest, NextResponse } from "next/server";
import { getPostsByCategory } from "../../../../../service/post";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  const { slug: category } = context.params;
  console.log("category", category);
  return getPostsByCategory(category).then((data) => NextResponse.json(data));
}
