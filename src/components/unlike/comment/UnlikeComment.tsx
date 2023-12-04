"use client";

import { useUnlikeCommentMutation } from "@/query/post-query";
import { Unlike } from "../Unlike";
import { UserDto } from "@/types/user/dto";

interface Props {
  postId: string;
  commentId: string;
  user: UserDto;
  likeNumber: number;
}

export const UnlikeComment = ({
  postId,
  commentId,
  user,
  likeNumber,
}: Props) => {
  const unlikeCommentMutation = useUnlikeCommentMutation();

  const handleClickUnlikeButton = () => {
    unlikeCommentMutation.mutate({
      postId,
      commentId,
      user,
    });
  };

  return <Unlike onClick={handleClickUnlikeButton} likeNumber={likeNumber} />;
};
