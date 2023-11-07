import { CreatePostPayload } from "@/types/post/payload";
import { v4 as uuidv4 } from "uuid";
import { client } from "./sanity";

export async function createPost(payload: CreatePostPayload) {
  // if (payload.photos.length > 0) {
  //   client.assets
  //     .upload("image", payload.photos[0], {
  //       contentType: payload.photos[0].type,
  //       filename: payload.photos[0].name,
  //     })
  //     .then((document) => {
  //       return client.create({
  //         _type: "post",
  //         id: uuidv4(),
  //         title: payload.title,
  //         category: payload.category,
  //         content: payload.content,
  //         author: { _ref: payload.author },
  //         like: 0,
  //         view: 0,
  //         comments: [],
  //         photos: { asset: { _ref: document._id } },
  //       });
  //     });
  // }

  return client.create({
    _type: "post",
    id: uuidv4(),
    title: payload.title,
    category: payload.category,
    content: payload.content,
    author: { _ref: payload.author },
    like: 0,
    view: 0,
    comments: [],
  });
}

export async function getPostsByCategory(category: string) {
  console.log("!!", category);
  return client
    .fetch(
      `*[_type == "post" && category == "${category}"]{
        "id":_id,
        "createdAt": _createdAt,
        "title": title,
        "content" : content,
        "username": author->username,
        "like": like,
        "commentNumber": count(comments),
        "view": view
      }`
    )
    .then((post) => post);
}

export async function deletePostsAll() {
  return client
    .delete({ query: '*[_type == "post"][0...999]' })
    .then(console.log)
    .catch(console.error);
}
