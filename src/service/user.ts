import { User } from "@/schemas/user";
import { OAuthUser } from "@/types/user/oauth-user";
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
    return await User.findOne({ socialId });
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
