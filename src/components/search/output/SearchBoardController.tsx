"use client";

import { queryClient } from "@/app/provider";
import { PostQueryKey, useGetPostsByCategoryQuery } from "@/query/post-query";
import { useEffect } from "react";
import { BoardContainer } from "../../board/BoardContainer";
import { SearchValue } from "@/app/atom";
import { useRecoilState } from "recoil";

interface Props {
  category: string;
}

export const SearchBoardController = ({ category }: Props) => {
  const [keyword, setKeyword] = useRecoilState(SearchValue);
  const { data: posts, isFetching } = useGetPostsByCategoryQuery(
    category || ""
  );

  const filterPosts = posts?.filter(
    (post) => post.title.includes(keyword) || post.content.includes(keyword)
  );

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([
        PostQueryKey.GetPostsByCategory,
        category,
      ]);
    };
  }, []);

  return (
    <BoardContainer
      category={category || ""}
      posts={filterPosts}
      isFetching={isFetching}
    />
  );
};
