import { client, urlFor } from "./sanity";

export async function getPost() {
  return client
    .fetch(
      `*[_type == "post"]{
        ...,
        "username": author->username,
        "userImage": author->image,
        "image": photo,
        "likes": likes[]->username,
        comments[]{comment, "username": author->username, "image": author->image},
        "id":_id,
        "createdAt":_createdAt
      }`
    )
    .then((post) => post);
}
