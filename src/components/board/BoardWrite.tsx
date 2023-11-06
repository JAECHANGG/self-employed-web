"use client";

import { useCreatePostMutation } from "@/query/post-query";

export const BoardWrite = () => {
  const createPostMutation = useCreatePostMutation();

  const handleClickCreateButton = () => {
    console.log("글 생성");
    // createPostMutation.mutate({
    //   title: "title",
    //   boardCategory: "freeboard",
    //   content: "content",
    //   author: "author",
    //   photos: [],
    // });
    const payload = new FormData();
    payload.append("title", "title");
    payload.append("boardCategory", "freeboard");
    payload.append("content", "content");
    payload.append("author", "author");
    payload.append("photos", "");
    createPostMutation.mutate(payload);
  };

  return (
    <div>
      <div>BoardWrite</div>
      <button onClick={handleClickCreateButton}>글 생성</button>
    </div>
  );
};
