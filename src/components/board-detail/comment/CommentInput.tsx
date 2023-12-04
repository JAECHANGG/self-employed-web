"use client";

import {
  useCreateCommentMutation,
  useCreateReplyMutation,
} from "@/query/post-query";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  id: string;
  userObjectId: string;
  selectedCommentId: string;
  setSelectedCommentId: Dispatch<SetStateAction<string>>;
}

export const CommentInput = ({
  id,
  userObjectId,
  selectedCommentId,
  setSelectedCommentId,
}: Props) => {
  const createCommentMutation = useCreateCommentMutation();
  const createReplyMutation = useCreateReplyMutation();
  const [commentValue, setCommentValue] = useState("");

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  const handleClickCreateComment = () => {
    const payload = {
      comment: commentValue,
      userId: userObjectId,
      postId: id,
    };
    createCommentMutation.mutate(payload);
  };

  const handleClickReplyComment = () => {
    const payload = {
      commentId: selectedCommentId,
      reply: commentValue,
      userId: userObjectId,
      postId: id,
    };
    createReplyMutation.mutate(payload, {
      onSuccess: () => {
        setSelectedCommentId("");
      },
    });
  };

  return (
    <section className="w-full bg-gray-100 flex items-center absolute bottom-0">
      <input
        className="w-full py-2 px-4 bg-gray-100 mr-2 rounded-lg"
        type="text"
        placeholder="댓글을 입력해주세요"
        onChange={handleChangeComment}
      />
      <div
        className="flex items-center justify-center"
        onClick={
          selectedCommentId ? handleClickReplyComment : handleClickCreateComment
        }
      >
        <SendOutlinedIcon style={{ height: 30 }} />
      </div>
    </section>
  );
};
