import { User } from "@/schemas/user";
import dbConnect from "@/util/database";

export async function updateMe(userId: string, username: string) {
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
    console.log("updateMe fail:", error);
    return false;
  } finally {
    // mongoose.connection.close();
  }
}
