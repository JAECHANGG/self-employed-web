import { Post } from "@/schemas/post";
import { User } from "@/schemas/user";
import { CreatePostPayload, UpdatePostPayload } from "@/types/post/payload";
import dbConnect from "@/util/database";

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
  await dbConnect();

  try {
    const result = await Post.find({ category }).populate("author");
    console.log("result", result);
    return result.map((post) => ({
      id: post._id,
      createdAt: post.createdAt,
      title: post.title,
      content: post.content,
      username: post.author.username,
      like: post.like,
      commentNumber: post.comments.length,
      view: post.view,
    }));
  } catch (error) {
    console.log("getPostsByCategory error", error);
    return [];
  }
}

export async function getPostById(id: string) {
  await dbConnect();

  try {
    return await Post.findOne({ _id: id }).populate("author");
  } catch (error) {
    console.log("getPostById error", error);
    return [];
  }
}

export async function updatePost(payload: UpdatePostPayload) {
  await dbConnect();

  console.log("payload", payload);
  try {
    await Post.findOneAndUpdate(
      { _id: payload.id },
      {
        title: payload.title,
        category: payload.category,
        content: payload.content,
      }
    );
    return true;
  } catch (error) {
    console.log("updateMe fail:", error);
    return false;
  } finally {
    // mongoose.connection.close();
  }
}
