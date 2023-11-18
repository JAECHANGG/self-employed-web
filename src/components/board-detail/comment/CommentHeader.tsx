"use client";

import { useDeleteCommentMutation } from "@/query/post-query";
import { DeleteCommentPayload } from "@/types/post/payload";
import { UserDto } from "@/types/user/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import React from "react";

interface Props {
  me: string;
  user: UserDto;
  createdAt: string;
  commentId: string;
  postId: string;
}

export default function CommentHeader({
  me,
  user,
  createdAt,
  commentId,
  postId,
}: Props) {
  const deleteCommentMutation = useDeleteCommentMutation();
  const handleClickCommentDelete = () => {
    const payload: DeleteCommentPayload = {
      postId,
      commentId,
    };
    deleteCommentMutation.mutate(payload);
  };

  return (
    <div className="flex items-center mb-2">
      <div className="w-6 h-6 mr-2">
        <img src={user.image} alt="profile_image" className="rounded-full" />
      </div>
      <div className="font-bold">{user.username}</div>
      <div className="ml-2 text-sm opacity-70">{MMDDHHmmTime(createdAt)}</div>
      {me === user.id && (
        <button onClick={handleClickCommentDelete}>삭제</button>
      )}
    </div>
  );
}
