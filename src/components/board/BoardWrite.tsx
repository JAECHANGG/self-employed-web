"use client";

import { useCreatePostMutation } from "@/query/post-query";
import { CreatePostPayload } from "@/types/post/payload";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const BoardWrite = () => {
  const { data: session, status } = useSession();

  const initPayload: CreatePostPayload = {
    title: "",
    category: "",
    content: "",
    user: "",
  };
  const [payload, setPayload] = useState<CreatePostPayload>(initPayload);
  const createPostMutation = useCreatePostMutation();

  const handleClickCreateButton = () => {
    createPostMutation.mutateAsync(payload);
  };

  const handleChangePayload = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value });
  };

  useEffect(() => {
    if (status === "authenticated") {
      setPayload({ ...payload, user: session.user.id });
    }
  }, [status]);

  if (!session) {
    // TODO session 없음 처리
    return <div>session없음</div>;
  }

  return (
    <div>
      <div>BoardWrite</div>
      <button onClick={handleClickCreateButton}>글 생성하기 버튼‼️</button>
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
            name="category"
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
