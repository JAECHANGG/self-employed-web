"use client";

import { DELETE_COMMENT } from "@/app/constants";
import CustomIconButton from "@/components/CustomIconButton";
import { useDeleteCommentMutation } from "@/query/post-query";
import { DeleteCommentPayload } from "@/types/post/payload";
import { UserDto } from "@/types/user/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Dispatch, SetStateAction } from "react";
import { ReplyButton } from "../reply/ReplyButton";

interface Props {
  me: string;
  user: UserDto;
  createdAt: string;
  commentId: string;
  postId: string;
  selectedCommentId: string;
  setSelectedCommentId: Dispatch<SetStateAction<string>>;
  comment: string;
}

export default function CommentHeader({
  me,
  user,
  createdAt,
  commentId,
  postId,
  selectedCommentId,
  setSelectedCommentId,
  comment,
}: Props) {
  const deleteCommentMutation = useDeleteCommentMutation();

  const handleClickCommentDelete = () => {
    const payload: DeleteCommentPayload = {
      postId,
      commentId,
    };
    deleteCommentMutation.mutate(payload);
  };

  return (
    <div className="flex items-center mb-2">
      <div className="w-6 h-6 mr-2">
        <img src={user.image} alt="profile_image" className="rounded-full" />
      </div>
      <div className="font-medium">{user.username}</div>
      <div className="ml-2 text-sm opacity-70 mr-2">
        {MMDDHHmmTime(createdAt)}
      </div>
      <ReplyButton
        commentId={commentId}
        selectedCommentId={selectedCommentId}
        setSelectedCommentId={setSelectedCommentId}
      />
      {me === user.id && comment !== DELETE_COMMENT && (
        <CustomIconButton>
          <DeleteOutlineOutlinedIcon
            onClick={handleClickCommentDelete}
            style={{ height: 14 }}
          />
        </CustomIconButton>
      )}
    </div>
  );
}
