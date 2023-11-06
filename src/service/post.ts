import { CreatePostPayload } from "@/types/post/payload";
import { v4 as uuidv4 } from "uuid";
import { client } from "./sanity";

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

export async function createPost(payload: CreatePostPayload) {
  console.log(payload);

  // return fetch(assetsURL, {
  //   method: "POST",
  //   headers: {
  //     authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
  //   },
  //   body: payload.photos,
  // })
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err))
  //   .then((result) => {
  //     return client.create({
  //       _type: "post",
  //       title: payload.title,
  //       boardCategory: payload.boardCategory,
  //       content: payload.content,
  //     });
  //   });

  // const photosUrl = payload.photos.length > 0 ? await fetch(assetsURL, {
  //   method: "POST",
  //   headers: {
  //     authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
  //   },
  //   body: payload.photos,
  // }) : []

  return client.create({
    _type: "post",
    id: uuidv4(),
    title: payload.title,
    boardCategory: payload.boardCategory,
    content: payload.content,
    author: { _ref: payload.author },
    likes: 0,
    view: 0,
    comments: [],
  });
}
