"use client";

import { queryClient } from "@/app/provider";
import { PostQueryKey, useGetAllPostsQuery } from "@/query/post-query";
import { useEffect } from "react";
import { BoardContainer } from "./BoardContainer";

export const AllController = () => {
  const { data: posts, isFetching } = useGetAllPostsQuery();

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([PostQueryKey.GetAllPosts]);
    };
  }, []);

  return <BoardContainer category={""} posts={posts} isFetching={isFetching} />;
};
