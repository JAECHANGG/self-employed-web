"use client";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  onClick: () => void;
  likeNumber: number;
}

export const Like = ({ onClick, likeNumber }: Props) => {
  return (
    <>
      <span
        className="flex items-center justify-center text-sm text-red-600 pr-1"
        onClick={onClick}
      >
        <FavoriteBorderIcon style={{ height: 17 }} />
      </span>
      {likeNumber}
    </>
  );
};
