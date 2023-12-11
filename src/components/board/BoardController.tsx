"use client";

import { queryClient } from "@/app/provider";
import { PostQueryKey, useGetPostsByCategoryQuery } from "@/query/post-query";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BoardContainer } from "./BoardContainer";

export const BoardController = () => {
  const pathname = usePathname();
  const category = pathname?.split("/")[2];
  const { data: posts, isFetching } = useGetPostsByCategoryQuery(
    category || ""
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
      posts={posts}
      isFetching={isFetching}
    />
  );
};
