"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PostQueryKey, useGetSearchPostsAllQuery } from "@/query/post-query";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { InfiniteBoardContainer } from "../board/InfiniteBoardContainer";

interface Props {
  keyword: string;
}

export const SearchAllController = ({ keyword }: Props) => {
  const {
    data: searchAllPosts,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useGetSearchPostsAllQuery({ keyword });

  const { observerElem } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([PostQueryKey.SearchPostsAll]);
    };
  }, []);

  return (
    <InfiniteBoardContainer
      category={""}
      posts={searchAllPosts}
      isLoading={isFetching}
      isFetchingNextPage={isFetchingNextPage}
      observerElem={observerElem}
    />
  );
};
