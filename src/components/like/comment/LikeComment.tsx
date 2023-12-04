"use client";

import { useLikeCommentMutation } from "@/query/post-query";
import { Like } from "../Like";
import { UserDto } from "@/types/user/dto";

interface Props {
  postId: string;
  commentId: string;
  user: UserDto;
  likeNumber: number;
}

export const LikeComment = ({ postId, commentId, user, likeNumber }: Props) => {
  const likeCommentMutation = useLikeCommentMutation();

  const handleClickLikeButton = () => {
    likeCommentMutation.mutate({
      postId,
      commentId,
      user,
    });
  };

  return <Like onClick={handleClickLikeButton} likeNumber={likeNumber} />;
};
