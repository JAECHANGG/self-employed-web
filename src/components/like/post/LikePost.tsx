"use client";

import { useLikePostMutation } from "@/query/post-query";
import { Like } from "../Like";

interface Props {
  postId: string;
  userId: string;
  likeNumber: number;
}

export const LikePost = ({ postId, userId, likeNumber }: Props) => {
  const likePostMutation = useLikePostMutation();

  const handleClickLikeButton = () => {
    likePostMutation.mutate({
      postId,
      userId,
    });
  };

  return <Like onClick={handleClickLikeButton} likeNumber={likeNumber} />;
};
