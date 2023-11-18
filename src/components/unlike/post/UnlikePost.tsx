"use client";

import { useUnlikePostMutation } from "@/query/post-query";
import { Unlike } from "../Unlike";

interface Props {
  postId: string;
  userId: string;
  likeNumber: number;
}

export const UnlikePost = ({ postId, userId, likeNumber }: Props) => {
  const unlikePostMutation = useUnlikePostMutation();

  const handleClickUnlikeButton = () => {
    unlikePostMutation.mutate({
      postId,
      userId,
    });
  };

  return <Unlike onClick={handleClickUnlikeButton} likeNumber={likeNumber} />;
};
