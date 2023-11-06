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
  if (payload.photos) {
    client.assets
      .upload("image", payload.photos[0], {
        contentType: payload.photos[0].type,
        filename: payload.photos[0].name,
      })
      .then((document) => {
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
          photos: { asset: { _ref: document._id } },
        });
      });
  }

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
