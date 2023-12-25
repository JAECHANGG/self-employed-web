"use client";

import { PostQueryKey, useGetPostsByCategoryQuery } from "@/query/post-query";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BoardContainer } from "./BoardContainer";
import { InfiniteBoardContainer } from "./InfiniteBoardContainer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const BoardController = () => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const category = pathname?.split("/")[2];
  const {
    data: posts,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetPostsByCategoryQuery(category || "");

  const { observerElem } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([
        PostQueryKey.GetPostsByCategory,
        category,
      ]);
    };
  }, []);

  return (
    <InfiniteBoardContainer
      category={category || ""}
      posts={posts}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      observerElem={observerElem}
    />
  );
};
