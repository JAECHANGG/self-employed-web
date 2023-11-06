import { client } from "./sanity";

export async function updateMe(userId: string, text: string, file: Blob) {
  console.log("hi", userId, text, file);
  return client
    .patch(userId)
    .set({ username: text, image: file })
    .commit({ autoGenerateArrayKeys: true });
}
