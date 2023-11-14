import { getPostById } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  console.log("req", request);
  const { slug: id } = context.params;
  console.log("id", id);
  return getPostById(id).then((data) => NextResponse.json(data));
}
