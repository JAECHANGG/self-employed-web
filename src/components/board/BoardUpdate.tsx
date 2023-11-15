"use client";

import { useGetPostByIdQuery, useUpdatePostMutation } from "@/query/post-query";
import { CreatePostPayload, UpdatePostPayload } from "@/types/post/payload";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const BoardUpdate = ({ slug: id }: Props) => {
  const { data: session, status } = useSession();
  const { data: post } = useGetPostByIdQuery(id);

  const initPayload: UpdatePostPayload = {
    title: post?.title || "",
    category: post?.category || "",
    content: post?.content || "",
    id,
  };
  const [payload, setPayload] = useState<UpdatePostPayload>(initPayload);
  const updatePostMutation = useUpdatePostMutation();

  const handleClickUpdateButton = () => {
    updatePostMutation.mutate(payload);
  };

  const handleChangePayload = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value });
  };

  if (!session) {
    // TODO session 없음 처리
    return <div>session없음</div>;
  }

  return (
    <div>
      <div>BoardUpdate</div>
      <button onClick={handleClickUpdateButton}>수정하기 버튼‼️</button>
      <div>
        <div>
          <input
            style={{ background: "pink" }}
            placeholder="제목"
            onChange={handleChangePayload}
            name="title"
            value={payload.title}
          />
        </div>
        <div>
          <input
            style={{ background: "green" }}
            placeholder="카테고리"
            onChange={handleChangePayload}
            name="category"
            value={payload.category}
          />
        </div>
        <textarea
          style={{ background: "orange" }}
          placeholder="내용"
          onChange={handleChangePayload}
          name="content"
          value={payload.content}
        />
      </div>
    </div>
  );
};
