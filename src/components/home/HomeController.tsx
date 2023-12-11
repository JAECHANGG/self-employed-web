"use client";

import { queryClient } from "@/app/provider";
import { PostQueryKey, useGetAllPostsQuery } from "@/query/post-query";
import { useEffect } from "react";
import { BoardContainer } from "../board/BoardContainer";

export const HomeController = () => {
  const { data: posts, isFetching } = useGetAllPostsQuery();

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([PostQueryKey.GetAllPosts]);
    };
  }, []);

  return <BoardContainer category={""} posts={posts} isFetching={isFetching} />;
};
