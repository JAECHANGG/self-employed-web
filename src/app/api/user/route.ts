import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const filePath = path.join(process.cwd(), "data", "user", "user.json");

export async function POST(request: Request, response: Response) {
  try {
    const newData = await request.json();
    const existingData = [];

    const userDB = fs.readFileSync(filePath, "utf-8");
    if (userDB) {
      existingData.push(JSON.parse(userDB));
    }
    existingData.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(existingData));
    return NextResponse.json({ id: newData.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
