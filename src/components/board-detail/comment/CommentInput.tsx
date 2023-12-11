"use client";

import {
  useCreateCommentMutation,
  useCreateReplyMutation,
} from "@/query/post-query";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const isLoading =
    createCommentMutation.isLoading || createReplyMutation.isLoading;

  const handleResizeHeight = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.scrollHeight > 112) {
      return;
    }

    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const handleChangeComment = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentValue(event.target.value);
    handleResizeHeight(event);
  };

  const handleClickCreateComment = () => {
    if (isLoading) {
      return;
    }

    const payload = {
      comment: commentValue,
      userId: userObjectId,
      postId: id,
    };
    createCommentMutation.mutate(payload, {
      onSuccess: () => {
        setCommentValue("");
      },
    });
  };

  const handleClickReplyComment = () => {
    if (isLoading) {
      return;
    }

    const payload = {
      commentId: selectedCommentId,
      reply: commentValue,
      userId: userObjectId,
      postId: id,
    };
    createReplyMutation.mutate(payload, {
      onSuccess: () => {
        setSelectedCommentId("");
        setCommentValue("");
      },
    });
  };

  useEffect(() => {
    if (selectedCommentId) {
      textareaRef.current?.focus();
    }
  }, [selectedCommentId]);

  return (
    <section className="w-full bg-gray-100 flex items-center absolute bottom-0 ">
      <textarea
        ref={textareaRef}
        className="w-full pl-4 pr-2 my-2 bg-gray-100 rounded-lg focus:outline-none overflow-hidden resize-none"
        placeholder="댓글을 입력해주세요"
        onChange={handleChangeComment}
        value={commentValue}
        rows={1}
      />
      <div
        className="flex items-center justify-center mr-3"
        onClick={
          selectedCommentId ? handleClickReplyComment : handleClickCreateComment
        }
      >
        {isLoading ? (
          <CircularProgress style={{ height: 23, width: 23, color: "black" }} />
        ) : (
          <SendOutlinedIcon style={{ height: 30 }} />
        )}
      </div>
    </section>
  );
};
