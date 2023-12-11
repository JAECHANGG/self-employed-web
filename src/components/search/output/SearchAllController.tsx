"use client";

import { queryClient } from "@/app/provider";
import { PostQueryKey, useGetAllPostsQuery } from "@/query/post-query";
import { useEffect } from "react";
import { BoardContainer } from "../../board/BoardContainer";
import { SearchValue } from "@/app/atom";
import { useRecoilState } from "recoil";

export const SearchAllController = () => {
  const [keyword, setKeyword] = useRecoilState(SearchValue);
  const { data: posts, isFetching } = useGetAllPostsQuery();

  console.log("keyword", keyword);

  const filterPosts = posts?.filter(
    (post) => post.title.includes(keyword) || post.content.includes(keyword)
  );

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([PostQueryKey.GetAllPosts]);
    };
  }, []);

  return (
    <BoardContainer category={""} posts={filterPosts} isFetching={isFetching} />
  );
};
