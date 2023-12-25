import { DELETE_COMMENT } from "@/app/constants";
import { Post } from "@/schemas/post";
import { User } from "@/schemas/user";
import {
  CreateCommentPayload,
  CreatePostPayload,
  CreateReplyPayload,
  DeleteCommentPayload,
  DeleteReplyPayload,
  IncreaseViewPayload,
  LikeCommentPayload,
  LikePostPayload,
  LikeReplyPayload,
  SearchPostPayload,
  UnlikeCommentPayload,
  UnlikeReplyPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import dbConnect from "@/util/database";

export async function createPost(payload: CreatePostPayload) {
  await dbConnect();

  try {
    const { socialId } = payload;
    const existingUser = await User.findOne({ socialId });
    if (!existingUser) {
      throw new Error("존재하지 않는 유저입니다.");
    }

    return savePost(existingUser.id, payload);
  } catch (error) {
    throw error;
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
    const { id } = await post.save();
    return {
      id,
    };
  } catch (error) {
    throw error;
  }
}

export async function getAllPosts(limit: number, offset: number) {
  await dbConnect();

  try {
    const result = await Post.find()
      .limit(limit)
      .skip(offset)
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("like")
      .populate("comments.user")
      .populate("comments.like")
      .populate("comments.replies.user")
      .populate("comments.replies.like");

    return result.map((post) => ({
      id: post._id,
      createdAt: post.createdAt,
      title: post.title,
      content: post.content,
      username: post.user.username,
      likeNumber: post.like.length,
      commentNumber: post.comments.length,
      view: post.view,
      category: post.category,
    }));
  } catch (error) {
    throw error;
  }
}

export async function getPostsByCategory(
  category: string,
  limit: number,
  offset: number
) {
  await dbConnect();

  try {
    const result = await Post.find({ category })
      .limit(limit)
      .skip(offset)
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("like")
      .populate("comments.user")
      .populate("comments.like")
      .populate("comments.replies.user")
      .populate("comments.replies.like");

    return result.map((post) => ({
      id: post._id,
      createdAt: post.createdAt,
      title: post.title,
      content: post.content,
      username: post.user.username,
      likeNumber: post.like.length,
      commentNumber: post.comments.length,
      view: post.view,
      category: post.category,
    }));
  } catch (error) {
    throw error;
  }
}

export async function getPostById(id: string) {
  await dbConnect();

  try {
    return await Post.findOne({ _id: id })
      .populate("user")
      .populate("like")
      .populate("comments.user")
      .populate("comments.like")
      .populate("comments.replies.user")
      .populate("comments.replies.like");
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
    return {
      id,
    };
  } catch (error) {
    throw error;
  }
}

export async function deletePost(id: string) {
  await dbConnect();

  try {
    await Post.findOneAndDelete({ _id: id });
    return null;
  } catch (error) {
    throw error;
  }
}

export async function createComment(payload: CreateCommentPayload) {
  const { postId, comment, userId } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $push: {
          comments: { comment, user: userId },
        },
      }
    );
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function deleteComment(payload: DeleteCommentPayload) {
  const { postId, commentId } = payload;
  await dbConnect();

  try {
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      throw new Error("Post or comment not found");
    }

    const comment = post.comments.id(commentId);
    comment.comment = DELETE_COMMENT;

    await post.save();
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function likePost(payload: LikePostPayload) {
  const { postId, user } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $push: {
          like: user.id,
        },
      }
    );
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function unlikePost(payload: LikePostPayload) {
  const { postId, user } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $pull: {
          like: user.id,
        },
      }
    );
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function likeComment(payload: LikeCommentPayload) {
  const { postId, commentId, user } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId, "comments._id": commentId },
      {
        $push: {
          "comments.$.like": user.id,
        },
      }
    );
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function unlikeComment(payload: UnlikeCommentPayload) {
  const { postId, commentId, user } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId, "comments._id": commentId },
      {
        $pull: {
          "comments.$.like": user.id,
        },
      }
    );
    return { id: postId };
  } catch (error) {
    throw error;
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
    return { id: payload.postId };
  } catch (error) {
    throw error;
  }
}

export async function createReply(payload: CreateReplyPayload) {
  const { postId, commentId, reply, userId } = payload;
  await dbConnect();

  try {
    await Post.findOneAndUpdate(
      { _id: postId, "comments._id": commentId },
      {
        $push: {
          "comments.$.replies": { reply, user: userId, like: [] },
        },
      }
    );
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function deleteReply(payload: DeleteReplyPayload) {
  const { postId, commentId, replyId } = payload;
  await dbConnect();

  try {
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      throw new Error("Post or comment not found");
    }

    const comment = post.comments.id(commentId);
    const reply = comment.replies.id(replyId);
    if (!reply) {
      throw new Error("Reply not found");
    }

    reply.reply = DELETE_COMMENT;
    await post.save();
    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function likeReply(payload: LikeReplyPayload) {
  const { postId, commentId, replyId, user } = payload;
  await dbConnect();

  try {
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      throw new Error("Post not found");
    }

    const comment = post.comments.id(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }

    const reply = comment.replies.id(replyId);
    if (!reply) {
      throw new Error("Reply not found");
    }

    reply.like.push(user.id);
    await post.save();

    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function unlikeReply(payload: UnlikeReplyPayload) {
  const { postId, commentId, replyId, user } = payload;
  await dbConnect();

  try {
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      throw new Error("Post not found");
    }

    const comment = post.comments.id(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }

    const reply = comment.replies.id(replyId);
    if (!reply) {
      throw new Error("Reply not found");
    }

    reply.like.pull(user.id);
    await post.save();

    return { id: postId };
  } catch (error) {
    throw error;
  }
}

export async function getSearchPostsAll(
  payload: SearchPostPayload,
  limit: number,
  offset: number
) {
  await dbConnect();

  const { keyword } = payload;

  try {
    const posts = await Post.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } }, // 'i' 옵션은 대소문자를 구분하지 않음
        { content: { $regex: keyword, $options: "i" } },
      ],
    })
      .populate("user")
      .limit(limit)
      .skip(offset);

    return posts.map((post) => ({
      id: post._id,
      createdAt: post.createdAt,
      title: post.title,
      content: post.content,
      username: post.user.username,
      likeNumber: post.like.length,
      commentNumber: post.comments.length,
      view: post.view,
      category: post.category,
    }));
  } catch (error) {
    console.error("getSearchPostsAll error", error);
    throw error;
  }
}
