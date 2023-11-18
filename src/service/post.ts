import { Post } from "@/schemas/post";
import { User } from "@/schemas/user";
import {
  CreateCommentPayload,
  CreatePostPayload,
  DeleteCommentPayload,
  IncreaseViewPayload,
  LikeCommentPayload,
  LikePostPayload,
  UnlikeCommentPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import dbConnect from "@/util/database";

export async function createPost(payload: CreatePostPayload) {
  await dbConnect();

  try {
    const existingUser = await User.findOne({ socialId: payload.user });
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
  const { title, category, content } = payload;
  const post = new Post({
    title,
    category,
    content,
    user: userObjectId,
    like: [],
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
    const result = await Post.find({ category }).populate("user");

    return result.map((post) => ({
      id: post._id,
      createdAt: post.createdAt,
      title: post.title,
      content: post.content,
      username: post.user.username,
      likeNumber: post.like.length,
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
    return await Post.findOne({ _id: id })
      .populate("user")
      .populate("like")
      .populate("comments.user")
      .populate("comments.like");
  } catch (error) {
    console.log("getPostById error", error);
    return [];
  }
}

export async function updatePost(payload: UpdatePostPayload) {
  const { id, title, category, content } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: id },
      {
        title,
        category,
        content,
      }
    );
    return true;
  } catch (error) {
    console.log("updatePost fail:", error);
    return false;
  }
}

export async function deletePost(id: string) {
  await dbConnect();

  try {
    await Post.findOneAndDelete({ _id: id });
    return true;
  } catch (error) {
    console.log("deletePost fail:", error);
  } finally {
  }
}

export async function createComment(payload: CreateCommentPayload) {
  const { id, comment, user } = payload;
  await dbConnect();

  console.log("createComment payload", payload);
  try {
    await Post.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          comments: { comment, user },
        },
      }
    );
    return true;
  } catch (error) {
    console.log("createComment fail:", error);
    return false;
  } finally {
    // mongoose.connection.close();
  }
}

export async function deleteComment(payload: DeleteCommentPayload) {
  const { postId, commentId } = payload;

  await dbConnect();

  console.log("deleteComment", commentId);
  try {
    await Post.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $pull: {
          comments: { _id: commentId },
        },
      }
    );
    return true;
  } catch (error) {
    console.log("commentDelete fail:", error);
  }
}

export async function likePost(payload: LikePostPayload) {
  const { postId, userId } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $push: {
          like: userId,
        },
      }
    );
    return true;
  } catch (error) {
    console.log("likePost fail:", error);
    return false;
  }
}

export async function unlikePost(payload: LikePostPayload) {
  const { postId, userId } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $pull: {
          like: userId,
        },
      }
    );
    return true;
  } catch (error) {
    console.log("unlikePost fail:", error);
    return false;
  }
}

export async function likeComment(payload: LikeCommentPayload) {
  const { postId, commentId, userId } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId, "comments._id": commentId },
      {
        $push: {
          "comments.$.like": userId,
        },
      }
    );
    return true;
  } catch (error) {
    console.log("likeComment fail:", error);
    return false;
  }
}

export async function unlikeComment(payload: UnlikeCommentPayload) {
  const { postId, commentId, userId } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId, "comments._id": commentId },
      {
        $pull: {
          "comments.$.like": userId,
        },
      }
    );
    return true;
  } catch (error) {
    console.log("unlikeComment fail:", error);
    return false;
  }
}

export async function increaseView(payload: IncreaseViewPayload) {
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: payload.postId },
      {
        $inc: {
          view: 1,
        },
      }
    );
    return true;
  } catch (error) {
    console.error("increaseViewCount fail:", error);
    return false;
  }
}
