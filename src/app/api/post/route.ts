import { NextRequest, NextResponse } from "next/server";
import { createPost, getPost } from "../../../service/post";

export async function GET() {
  return getPost().then((data) => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const payload = {
    title: form.get("title")?.toString() || "",
    boardCategory: form.get("boardCategory")?.toString() || "",
    content: form.get("content")?.toString() || "",
    author: form.get("author")?.toString() || "",
    photos: [form.get("photos") as File],
  };

  return createPost(payload).then((data) => NextResponse.json(data));
}
