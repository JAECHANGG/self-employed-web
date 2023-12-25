"use client";

import { SearchValue } from "@/app/atom";
import { PostQueryKey, useGetPostsByCategoryQuery } from "@/query/post-query";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { BoardContainer } from "../../board/BoardContainer";

interface Props {
  category: string;
}

export const SearchBoardController = ({ category }: Props) => {
  const queryClient = useQueryClient();
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
