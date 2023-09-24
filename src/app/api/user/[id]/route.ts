import { Profile, UpdateProfile } from "@/types/profile/profile";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
// import { promises as fs } from "fs";

const filePath = path.join(process.cwd(), "data", "user", "user.json");

export async function GET(request: NextRequest, response: Response) {
  try {
    const id = request.nextUrl.pathname.replace("/api/user/", "");
    const userDB = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    const userData: Profile[] = JSON.parse(userDB);
    const user = userData.find((user) => user.id === id);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to get data" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, response: Response) {
  try {
    const newData: UpdateProfile = await request.json();
    const userDB = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    const userData: Profile[] = JSON.parse(userDB);

    const userIndex = userData.findIndex((user) => user.id === newData.id);
    if (userIndex !== -1) {
      userData[userIndex] = newData;
      fs.writeFileSync(filePath, JSON.stringify(userData));
      return NextResponse.json({ message: "User update successfully" });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, response: Response) {
  try {
    const id = request.nextUrl.pathname.replace("/api/user/", "");
    const userDB = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    const userData: Profile[] = JSON.parse(userDB);

    const userIndex = userData.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      userData.splice(userIndex, 1);
      fs.writeFileSync(filePath, JSON.stringify(userData));
      return NextResponse.json({ message: "User deleted successfully" });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
