"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  onClick: () => void;
  likeNumber: number;
}

export const Unlike = ({ onClick, likeNumber }: Props) => {
  return (
    <>
      <span
        className="flex items-center justify-center text-sm text-red-600 pr-1"
        onClick={onClick}
      >
        <FavoriteIcon style={{ height: 17 }} />
      </span>
      {likeNumber}
    </>
  );
};
