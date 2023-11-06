import { assetsURL, client } from "./sanity";

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
      }`
    )
    .then((post) => post);
}

export async function createPost(payload: any) {
  console.log(payload);

  return fetch(assetsURL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
    },
    body: payload.photos,
  })
    .then((res) => res.json())
    .then((result) => {
      return client.create({
        _type: "post",
        title: payload.title,
        boardCategory: payload.boardCategory,
        content: payload.content,
      });
    });
}
