"use client";

import { useUnlikePostMutation } from "@/query/post-query";
import { Unlike } from "../Unlike";
import { UserDto } from "@/types/user/dto";

interface Props {
  postId: string;
  user: UserDto;
  likeNumber: number;
}

export const UnlikePost = ({ postId, user, likeNumber }: Props) => {
  const unlikePostMutation = useUnlikePostMutation();

  const handleClickUnlikeButton = () => {
    unlikePostMutation.mutate({
      postId,
      user,
    });
  };

  return <Unlike onClick={handleClickUnlikeButton} likeNumber={likeNumber} />;
};
