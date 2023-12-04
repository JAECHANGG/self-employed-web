"use client";

import { queryClient } from "@/app/provider";
import {
  PostQueryKey,
  useGetAllPostsQuery,
  useGetPostsByCategoryQuery,
} from "@/query/post-query";
import { HHmmTime } from "@/util/time-util";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "../Spinner";

export const BoardContainer = () => {
  // const headersList = headers();
  // const pathname = headersList.get("x-invoke-path");
  const pathname = usePathname();
  const home = pathname?.split("/")[1];
  const category = pathname?.split("/")[2];
  const useGetPosts =
    category === "allboard" || home === "home"
      ? useGetAllPostsQuery
      : useGetPostsByCategoryQuery;

  const { data: postsByCategory, isFetching } = useGetPosts(category || "");

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries([
        PostQueryKey.GetPostsByCategory,
        category,
      ]);
      queryClient.invalidateQueries([PostQueryKey.GetAllPosts]);
    };
  }, []);

  return (
    <>
      <article className="overflow-x-hidden overflow-y-auto">
        {isFetching && <Spinner />}
        {category !== "bestboard" &&
          category !== "allboard" &&
          home !== "home" && (
            <Link href={`/boards/write/${category}`}>글쓰기 버튼</Link>
          )}
        {postsByCategory?.map((data) => {
          return (
            <Link href={`/boards/${data.category}/${data.id}`} key={data.id}>
              <div className="bg-white border border-myColor-white-gray p-4 cursor-pointer">
                <h1 className="text-xl font-bold truncate mb-3">
                  {data.title}
                </h1>
                <div className="text-base line-clamp-2 mb-3">
                  {data.content}
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-bold mr-2">{data.username}</span>
                  <span>{HHmmTime(data.createdAt)}</span>
                  <span className="text-red-500 ml-2 flex items-center">
                    <FavoriteBorderIcon style={{ height: 15 }} />
                    {data.likeNumber}
                  </span>
                  <span className="text-blue-500 ml-2 flex items-center">
                    <ModeCommentOutlinedIcon
                      style={{ height: 14, paddingTop: 2 }}
                    />
                    {data.commentNumber}
                  </span>
                  <span className="text-green-500 ml-2 flex items-center">
                    <RemoveRedEyeOutlinedIcon style={{ height: 16 }} />
                    {data.view}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </article>
    </>
  );
};
