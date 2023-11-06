import { client } from "./sanity";

export async function updateMe(userId: string, text: string, file: Blob) {
  console.log("hi", userId, text, file);
  client
    .patch(userId)
    .set({ username: text })
    .set({ image: file })
    .commit({ autoGenerateArrayKeys: true });
}
