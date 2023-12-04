"use client";

import { useLikePostMutation } from "@/query/post-query";
import { Like } from "../Like";
import { UserDto } from "@/types/user/dto";

interface Props {
  postId: string;
  user: UserDto;
  likeNumber: number;
}

export const LikePost = ({ postId, user, likeNumber }: Props) => {
  const likePostMutation = useLikePostMutation();

  const handleClickLikeButton = () => {
    likePostMutation.mutate({
      postId,
      user,
    });
  };

  return <Like onClick={handleClickLikeButton} likeNumber={likeNumber} />;
};
