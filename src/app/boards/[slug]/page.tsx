import React from "react";
import { boardTitleMap } from "../page";
import { BoardContainer } from "@/components/board/BoardContainer";

interface Props {
  params: { slug: string };
}

export default function boardPage({ params: { slug } }: Props) {
  console.log(slug);
  return <BoardContainer />;
}

export function generateStaticParams() {
  return Object.keys(boardTitleMap).map((title) => ({
    slug: boardTitleMap[title].id,
  }));
}
