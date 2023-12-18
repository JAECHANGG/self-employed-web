"use client";

import { queryClient } from "@/app/provider";
import { PostQueryKey, useGetSearchPostsAllQuery } from "@/query/post-query";
import { useEffect } from "react";
import { BoardContainer } from "../board/BoardContainer";

interface Props {
  keyword: string;
}

export const SearchAllController = ({ keyword }: Props) => {
  const { data: searchAllPosts, isFetching } = useGetSearchPostsAllQuery({
    keyword,
  });

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([PostQueryKey.SearchPostsAll]);
    };
  }, []);

  return (
    <BoardContainer
      category={""}
      posts={searchAllPosts}
      isFetching={isFetching}
    />
  );
};
