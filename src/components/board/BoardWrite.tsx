"use client";

import { useCreatePostMutation } from "@/query/post-query";
import { CreatePostPayload } from "@/types/post/payload";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";

export const BoardWrite = () => {
  const { data: session, status } = useSession();

  const initPayload: CreatePostPayload = {
    title: "",
    boardCategory: "",
    content: "",
    author: "",
    photos: [],
  };
  const [payload, setPayload] = useState<CreatePostPayload>(initPayload);
  const [images, setImages] = useState<string[]>([]);
  const createPostMutation = useCreatePostMutation();

  const handleClickCreateButton = () => {
    const formData = new FormData();
    formData.append("title", payload.title);
    formData.append("boardCategory", payload.boardCategory);
    formData.append("content", payload.content);
    formData.append("author", payload.author);
    payload.photos.forEach((photo) => {
      formData.append("photos", photo);
    });
    console.log(payload);
    createPostMutation.mutate(formData);
  };

  const handleChangePayload = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleChangeImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const newFile = event.target.files[0];
      setPayload({ ...payload, photos: [newFile] });
      const imageUrl = URL.createObjectURL(newFile);
      setImages([imageUrl]);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      setPayload({ ...payload, author: session.user.id });
    }
  }, [status]);

  if (!session) {
    // TODO session 없음 처리
    return <div>session없음</div>;
  }

  return (
    <div>
      <div>BoardWrite</div>
      <button onClick={handleClickCreateButton}>글 생성</button>
      <div>
        <div>
          <input
            style={{ background: "pink" }}
            placeholder="제목"
            onChange={handleChangePayload}
            name="title"
          />
        </div>
        <div>
          <input
            style={{ background: "green" }}
            placeholder="카테고리"
            onChange={handleChangePayload}
            name="boardCategory"
          />
        </div>
        <textarea
          style={{ background: "orange" }}
          placeholder="내용"
          onChange={handleChangePayload}
          name="content"
        />
        <img className="rounded-full" src={images[0] || ""} alt="post_image" />
        <input type="file" onChange={handleChangeImageHandler} />
      </div>
    </div>
  );
};
