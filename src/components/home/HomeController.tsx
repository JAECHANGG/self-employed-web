"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PostQueryKey, useGetAllPostsQuery } from "@/query/post-query";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { InfiniteBoardContainer } from "../board/InfiniteBoardContainer";

export const HomeController = () => {
  const {
    data: posts,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllPostsQuery();

  const { observerElem } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([PostQueryKey.GetAllPosts]);
    };
  }, []);

  return (
    <InfiniteBoardContainer
      category={""}
      posts={posts}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      observerElem={observerElem}
    />
  );
};
