"use client";

import { useCreateCommentMutation } from "@/query/post-query";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";

interface Props {
  id: string;
  userObjectId: string;
}

export const CommentInput = ({ id, userObjectId }: Props) => {
  const createCommentMutation = useCreateCommentMutation();
  const [commentValue, setCommentValue] = useState("");

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  const handleClickCreateComment = () => {
    const payload = {
      comment: commentValue,
      author: userObjectId,
      id,
    };
    createCommentMutation.mutate(payload);
    console.log("생성");
  };

  return (
    <div className="flex items-center">
      <input
        className="w-full py-2 px-4 bg-gray-100 mr-2 rounded-lg"
        type="text"
        placeholder="댓글을 입력해주세요"
        onChange={handleChangeComment}
      />
      <div
        className="flex items-center justify-center"
        onClick={handleClickCreateComment}
      >
        <SendOutlinedIcon style={{ height: 30 }} />
      </div>
    </div>
  );
};
