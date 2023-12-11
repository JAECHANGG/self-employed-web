"use client";

import CustomIconButton from "@/components/CustomIconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Dispatch, SetStateAction } from "react";

interface Props {
  commentId: string;
  selectedCommentId: string;
  setSelectedCommentId: Dispatch<SetStateAction<string>>;
}

export const ReplyButton: React.FC<Props> = ({
  commentId,
  selectedCommentId,
  setSelectedCommentId,
}) => {
  const handleClickReplyButton = () => {
    setSelectedCommentId(commentId);
  };

  const handleClickCancelReplyButton = () => {
    setSelectedCommentId("");
  };

  return (
    <>
      {selectedCommentId === commentId ? (
        <CustomIconButton onClick={handleClickCancelReplyButton}>
          <ClearOutlinedIcon style={{ height: 14 }} />
        </CustomIconButton>
      ) : (
        <CustomIconButton onClick={handleClickReplyButton}>
          <ChatBubbleOutlineIcon style={{ height: 14 }} />
        </CustomIconButton>
      )}
    </>
  );
};
