"use client";

import { postApi } from "@/api/post/post-api";
import { useGetPostsByCategoryQuery } from "@/query/post-query";
import { HHmmTime } from "@/util/time-util";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export const BoardContainer = () => {
  // const headersList = headers();
  // const pathname = headersList.get("x-invoke-path");
  const pathname = usePathname();
  const category = pathname?.split("/")[2];
  const { data: postsByCategory } = useGetPostsByCategoryQuery(category || "");
  console.log("postsByCategory", postsByCategory);

  return (
    <>
      <article className="h-full overflow-x-hidden overflow-y-auto p-4">
        <Link href={`/boards/write/${category}`}>글쓰기 버튼</Link>
        {postsByCategory?.map((data) => {
          return (
            <Link href={`${pathname}/${data.id}`} key={data.id}>
              <div className="border border-blue-200 rounded-lg mb-5 p-4 cursor-pointer">
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
                    {data.like}
                  </span>
                  <span className="text-blue-500 ml-2 flex items-center">
                    <ChatBubbleOutlineIcon
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
