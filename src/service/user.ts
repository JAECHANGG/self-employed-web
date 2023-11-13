import { User } from "@/schemas/user";
import dbConnect from "@/util/database";
import mongoose from "mongoose";

interface OAuthUser {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}

export async function addUser({ id, email, name, username, image }: OAuthUser) {
  await dbConnect();

  try {
    const existingUser = await User.findOne({ socialId: id });
    if (existingUser) {
      console.log("이미 존재하는 유저", existingUser.username);
      mongoose.connection.close();
      return true;
    }

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
      mongoose.connection.close();
      return true;
    } catch (error) {
      console.error("사용자 생성 중 오류 발생:", error);
      mongoose.connection.close();
      return false;
    }
  } catch (error) {
    console.log("탐색 중 에러 error", error);
    mongoose.connection.close();
    return false;
  }
}

export async function getUserById(socialId: string) {
  await dbConnect();

  try {
    const result = await User.findOne({ socialId });
    mongoose.connection.close();
    return result;
  } catch (error) {
    console.log("user 정보를 찾을 수 없습니다.", error);
    mongoose.connection.close();
    return false;
  }
}
