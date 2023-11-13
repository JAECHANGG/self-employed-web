import { Post } from "@/schemas/post";
import { User } from "@/schemas/user";
import { CreatePostPayload } from "@/types/post/payload";
import dbConnect from "@/util/database";
import { client } from "./sanity";

export async function createPost(payload: CreatePostPayload) {
  await dbConnect();

  try {
    const existingUser = await User.findOne({ socialId: payload.author });
    if (!existingUser) {
      console.log("존재하지 않는 유저입니다.");
      return false;
    }

    return savePost(existingUser._id, payload);
  } catch (error) {
    console.log("user 탐색 중 오류.", error);
    return false;
  }
}

async function savePost(userObjectId: string, payload: CreatePostPayload) {
  const post = new Post({
    title: payload.title,
    category: payload.category,
    content: payload.content,
    author: userObjectId,
    comments: [],
  });

  try {
    await post.save();
    console.log("새로운 포스트가 생성되었습니다");
    return true;
  } catch (error) {
    console.error("포스트 생성 중 오류 발생:", error);
    return false;
  }
}

export async function getPostsByCategory(category: string) {
  console.log("!!", category);
  return client
    .fetch(
      `*[_type == "post" && category == "${category}"]{
        "id":_id,
        "createdAt": _createdAt,
        "title": title,
        "content" : content,
        "username": author->username,
        "like": like,
        "commentNumber": count(comments),
        "view": view
      }`
    )
    .then((post) => post);
}
