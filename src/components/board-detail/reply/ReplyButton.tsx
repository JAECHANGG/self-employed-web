"use client";

import CustomIconButton from "@/components/CustomIconButton";
import CustomTextButton from "@/components/CustomTextButton";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
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
        <CustomTextButton
          onClick={handleClickCancelReplyButton}
          title="답글취소"
          size="Small"
        />
      ) : (
        <CustomIconButton onClick={handleClickReplyButton}>
          <AddCommentOutlinedIcon style={{ height: 15 }} />
        </CustomIconButton>
        // <CustomTextButton
        //   onClick={handleClickReplyButton}
        //   title="답글"
        //   size="Small"
        // />
      )}
    </>
  );
};
