"use client";

import { DELETE_COMMENT } from "@/app/constants";
import CustomTextButton from "@/components/CustomTextButton";
import { useDeleteReplyMutation } from "@/query/post-query";
import { DeleteReplyPayload } from "@/types/post/payload";
import { UserDto } from "@/types/user/dto";
import { MMDDHHmmTime } from "@/util/time-util";

interface Props {
  me: string;
  user: UserDto;
  createdAt: string;
  commentId: string;
  postId: string;
  replyId: string;
  reply: string;
}

export default function ReplyHeader({
  me,
  user,
  createdAt,
  commentId,
  postId,
  replyId,
  reply,
}: Props) {
  const deleteReplyMutation = useDeleteReplyMutation();

  const handleClickDeleteReplyButton = () => {
    const payload: DeleteReplyPayload = {
      postId,
      commentId,
      replyId,
    };
    deleteReplyMutation.mutate(payload);
  };

  return (
    <div className="flex items-center my-2">
      <div className="w-6 h-6 mr-2">
        <img src={user.image} alt="profile_image" className="rounded-full" />
      </div>
      <div className="font-bold">{user.username}</div>
      <div className="mx-2 text-sm opacity-70">{MMDDHHmmTime(createdAt)}</div>
      {me === user.id && reply !== DELETE_COMMENT && (
        <CustomTextButton
          onClick={handleClickDeleteReplyButton}
          title="삭제"
          size="Small"
        />
      )}
    </div>
  );
}
