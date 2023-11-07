import { client } from "./sanity";

export async function updateMe(userId: string, text: string, file: File) {
  console.log("hi", userId, text, file);
  await client.assets
    .upload("image", file, {
      contentType: file.type,
      filename: file.name,
    })
    .then((document) => {
      console.log("document", document);
      return client
        .patch(userId)
        .set({ username: text, image: document.url })
        .commit({ autoGenerateArrayKeys: true });
    });
}
