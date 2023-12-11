import { User } from "@/schemas/user";
import { PostByIdDto } from "@/types/post/dto";
import {
  AddCollectionPayload,
  DeleteSearchKeywordsAllPayload,
  DeleteSearchKeywordPayload,
} from "@/types/user/payload";
import { OAuthUser } from "@/types/user/oauth-user";
import {
  AddSearchKeywordPayload,
  GetSearchKeywordsPayload,
} from "@/types/user/payload";
import dbConnect from "@/util/database";

export async function updateUser(userId: string, username: string) {
  await dbConnect();

  try {
    await User.findOneAndUpdate(
      {
        socialId: userId,
      },
      {
        username,
      }
    );
    return true;
  } catch (error) {
    console.log("updateUser fail:", error);
    return false;
  }
}

export async function addUser({ id, email, name, username, image }: OAuthUser) {
  await dbConnect();

  try {
    const existingUser = await User.findOne({ socialId: id });
    if (existingUser) {
      console.log("이미 존재하는 유저", existingUser.username);
      return true;
    }
    return createUser({ id, email, name, username, image });
  } catch (error) {
    console.log("탐색 중 에러 error", error);
    return false;
  }
}

export async function getUserById(socialId: string) {
  await dbConnect();

  try {
    const result = await User.findOne({ socialId }).populate({
      path: "collections",
      populate: {
        path: "user",
        model: "User",
        select: "username",
        strictPopulate: false,
      },
    });

    const collections = result.collections.map((post: PostByIdDto) => ({
      id: post.id,
      createdAt: post.createdAt,
      title: post.title,
      content: post.content,
      username: post.user.username,
      likeNumber: post.like.length,
      commentNumber: post.comments.length,
      view: post.view,
    }));

    return { ...result._doc, collections, id: result._id };
  } catch (error) {
    console.log("user 정보를 찾을 수 없습니다.", error);
    return false;
  }
}

async function createUser({ id, email, name, username, image }: OAuthUser) {
  const user = new User({
    socialId: id,
    username,
    name,
    email,
    image,
  });

  try {
    await user.save();
    console.log("새로운 사용자가 생성되었습니다");
    return true;
  } catch (error) {
    console.error("사용자 생성 중 오류 발생:", error);
    return false;
  }
}

export async function addCollection(payload: AddCollectionPayload) {
  const { postId, userId } = payload;
  await dbConnect();

  try {
    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          collections: postId,
        },
      }
    );
    return null;
  } catch (error) {
    throw error;
  }
}

export async function deleteCollection(payload: AddCollectionPayload) {
  const { postId, userId } = payload;
  await dbConnect();

  try {
    await User.findOneAndUpdate(
      { _id: userId },
      {
        $pull: {
          collections: postId,
        },
      }
    );
    return null;
  } catch (error) {
    throw error;
  }
}

export async function createSearchKeyword({
  userId,
  keyword,
}: AddSearchKeywordPayload) {
  console.log("@@@@@@@@@@@@@@@@");
  try {
    const result = await User.findOneAndUpdate(
      { socialId: userId },
      {
        $push: {
          keywords: { keyword },
        },
      }
    );
    console.log("REWRWR#@R@#R@", result);
    return null;
  } catch (error) {
    throw error;
  }
}

export async function getSearchKeyword({ userId }: GetSearchKeywordsPayload) {
  await dbConnect();

  try {
    const result = await User.findOne({ socialId: userId });
    return result.keywords;
  } catch (error) {
    console.log("searchKeyword를 찾을 수 없습니다.", error);
    return false;
  }
}

export async function deleteSearchKeyword(payload: DeleteSearchKeywordPayload) {
  const { userId, keywordId } = payload;

  await dbConnect();

  try {
    await User.findOneAndUpdate(
      { socialId: userId },
      {
        $pull: {
          keywords: { _id: keywordId },
        },
      }
    );
    return null;
  } catch (error) {
    throw error;
  }
}

export async function deleteSearchKeywordsAll(
  payload: DeleteSearchKeywordsAllPayload
) {
  const { userId } = payload;
  await dbConnect();

  try {
    await User.findOneAndUpdate(
      { socialId: userId },
      {
        $set: {
          keywords: [],
        },
      }
    );
    return null;
  } catch (error) {
    throw error;
  }
}
