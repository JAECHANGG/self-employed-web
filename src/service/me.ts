import { client } from "./sanity";

export async function updateMe(userId: string, text: string, file: Blob) {
  console.log("hi");
  client.patch(userId).setIfMissing({});
}
