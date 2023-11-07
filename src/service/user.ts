import { client } from "./sanity";

interface OAuthUser {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}

export async function addUser({ id, email, name, username, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    id,
    email,
    name,
    username,
    image,
  });
}

export async function getUserById(id: string) {
  return client.fetch(`*[_type == "user" && id == "${id}"][0]`);
}
