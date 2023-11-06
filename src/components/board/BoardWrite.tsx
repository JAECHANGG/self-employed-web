"use client";

import { useCreatePostMutation } from "@/query/post-query";
import { CreatePostPayload } from "@/types/post/payload";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const BoardWrite = () => {
  const { data: session, status } = useSession();

  const initPayload = {
    title: "",
    boardCategory: "",
    content: "",
    author: "",
    photos: [],
  };
  const [payload, setPayload] = useState<CreatePostPayload>(initPayload);
  const createPostMutation = useCreatePostMutation();

  const handleClickCreateButton = () => {
    const formData = new FormData();
    formData.append("title", payload.title);
    formData.append("boardCategory", payload.boardCategory);
    formData.append("content", payload.content);
    formData.append("author", payload.author);
    formData.append("photos", "");
    console.log(payload);
    createPostMutation.mutate(formData);
  };

  const handleChangePayload = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value });
  };

  if (!session) {
    // TODO 에러처리
    return <div>에러</div>;
  }

  useEffect(() => {
    if (status === "authenticated") {
      setPayload({ ...payload, author: session.user.id });
    }
  }, [status]);

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
      </div>
    </div>
  );
};
