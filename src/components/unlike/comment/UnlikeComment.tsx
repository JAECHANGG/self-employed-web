"use client";

import { useUnlikeCommentMutation } from "@/query/post-query";
import { Unlike } from "../Unlike";

interface Props {
  postId: string;
  commentId: string;
  userId: string;
  likeNumber: number;
}

export const UnlikeComment = ({
  postId,
  commentId,
  userId,
  likeNumber,
}: Props) => {
  const unlikeCommentMutation = useUnlikeCommentMutation();

  const handleClickUnlikeButton = () => {
    unlikeCommentMutation.mutate({
      postId,
      commentId,
      userId,
    });
  };

  return <Unlike onClick={handleClickUnlikeButton} likeNumber={likeNumber} />;
};
