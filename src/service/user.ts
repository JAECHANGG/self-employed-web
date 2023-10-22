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
    email,
    name,
    username,
    image,
  });
}

export async function getUserByEmail(email: string) {
  return client.fetch(
    `*[_type == "user" && email == "${email}"][0]{
        ...,
        "id":_id,
      }`
  );
}
