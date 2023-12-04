"use client";

import { useUnlikeReplyMutation } from "@/query/post-query";
import { UserDto } from "@/types/user/dto";
import { Unlike } from "../Unlike";

interface Props {
  postId: string;
  commentId: string;
  replyId: string;
  user: UserDto;
  likeNumber: number;
}

export const UnlikeReply = ({
  postId,
  commentId,
  replyId,
  user,
  likeNumber,
}: Props) => {
  const unlikeReplyMutation = useUnlikeReplyMutation();

  const handleClickUnlikeButton = () => {
    unlikeReplyMutation.mutate({
      postId,
      commentId,
      replyId,
      user,
    });
  };

  return <Unlike onClick={handleClickUnlikeButton} likeNumber={likeNumber} />;
};
