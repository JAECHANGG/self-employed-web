"use client";

import { useLikeCommentMutation } from "@/query/post-query";
import { Like } from "../Like";

interface Props {
  postId: string;
  commentId: string;
  userId: string;
  likeNumber: number;
}

export const LikeComment = ({
  postId,
  commentId,
  userId,
  likeNumber,
}: Props) => {
  const likeCommentMutation = useLikeCommentMutation();

  const handleClickLikeButton = () => {
    likeCommentMutation.mutate({
      postId,
      commentId,
      userId,
    });
  };

  return <Like onClick={handleClickLikeButton} likeNumber={likeNumber} />;
};
