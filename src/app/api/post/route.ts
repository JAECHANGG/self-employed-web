import { NextRequest, NextResponse } from "next/server";
import { createPost, deletePostsAll } from "../../../service/post";

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const payload = {
    title: form.get("title")?.toString() || "",
    category: form.get("category")?.toString() || "",
    content: form.get("content")?.toString() || "",
    author: form.get("author")?.toString() || "",
    photos: [form.get("photos") as File],
  };

  return createPost(payload).then((data) => NextResponse.json(data));
}

export async function DELETE() {
  return deletePostsAll().then((data) => NextResponse.json(data));
}
