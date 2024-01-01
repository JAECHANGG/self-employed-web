"use client";

import { BoardTitleMap } from "@/components/board/BoardTitleMap";
import { useState } from "react";
import SearchHeader from "../SearchHeader";

export default function SearchCategory() {
  const [category, setCategory] = useState("allboard");

  const handleChangeCategory = (id: string) => {
    setCategory(id);
  };

  console.log("category", category);

  return (
    <section className="absolute top-0 left-0 flex flex-col w-full h-full z-300">
      <SearchHeader />
      <ul className="flex justify-around">
        {Object.keys(BoardTitleMap).map((title, index) => (
          <li
            key={title}
            className="border-b border-slate-400"
            onClick={() => handleChangeCategory(BoardTitleMap[title].id)}
          >
            {title.replace("게시판", "")}
          </li>
        ))}
      </ul>
      {/* {category === "allboard" ? (
        <SearchAllController />
      ) : (
        <SearchBoardController category={category} />
      )} */}
    </section>
  );
}
