import { boardTitleMap } from "@/app/boards/page";
import React from "react";

interface Props {
  category: string;
  onClick: (category: string) => void;
}

const { 인기게시판, 전체게시판, ...otherBoardTitleMap } = boardTitleMap;

export default function CategoryBottomSheet({ category, onClick }: Props) {
  const contents = Object.values(otherBoardTitleMap).filter(
    ({ id }) => id === category
  )[0];

  return (
    <ul>
      {Object.keys(otherBoardTitleMap).map((category) => (
        <li
          key={category}
          className="text-lg py-1 cursor-pointer"
          onClick={() => onClick(otherBoardTitleMap[category].id)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
