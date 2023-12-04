"use client";

import { useLikeReplyMutation } from "@/query/post-query";
import { UserDto } from "@/types/user/dto";
import { Like } from "../Like";

interface Props {
  postId: string;
  commentId: string;
  replyId: string;
  user: UserDto;
  likeNumber: number;
}

export const LikeReply = ({
  postId,
  commentId,
  replyId,
  user,
  likeNumber,
}: Props) => {
  const likeReplyMutation = useLikeReplyMutation();

  const handleClickLikeButton = () => {
    likeReplyMutation.mutate({
      postId,
      commentId,
      replyId,
      user,
    });
  };

  return <Like onClick={handleClickLikeButton} likeNumber={likeNumber} />;
};
