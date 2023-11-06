import { NextRequest, NextResponse } from "next/server";
import { createPost, getPost } from "../../../service/post";

export async function GET() {
  return getPost().then((data) => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  console.log(form.get("title"));
  console.log(form.get("boardCategory"));
  console.log(form.get("content"));
  console.log(form.get("author"));
  console.log(form.get("photos"));

  const payload = {
    title: form.get("title"),
    boardCategory: form.get("boardCategory"),
    content: form.get("content"),
    author: form.get("author"),
    photos: form.get("photos"),
  };

  return createPost(payload).then((data) => NextResponse.json(data));
}
