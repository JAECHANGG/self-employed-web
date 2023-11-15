"use client";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { BoardDetailContentHeader } from "./BoardDetailContentHeader";
import { Comment } from "./comment/Comment";
import { CommentInput } from "./comment/CommentInput";
import { useGetPostByIdQuery } from "@/query/post-query";
import { useGetMeQuery } from "@/query/me-query";
import { useEffect } from "react";

interface Props {
  id: string;
}

export const BoardDetailContainer = ({ id }: Props) => {
  const { data, isLoading } = useGetPostByIdQuery(id);
  const { data: me } = useGetMeQuery();

  if (isLoading) return <div>로딩중...</div>;

  if (!data) {
    return <div>데이터가 없습니다...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[83vh]">
        <div className="flex flex-col">
          <div className="mb-5">
            <BoardDetailContentHeader data={data} me={me?.socialId || ""} />
          </div>
          <div className="font-bold text-2xl mb-5">{data.title}</div>
          <div className="mb-10">{data.content}</div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="flex items-center justify-center text-sm text-red-600 pr-1">
                <FavoriteBorderIcon style={{ height: 17 }} />
              </span>
              {data.like}
              <span className="flex items-center justify-center text-sm text-blue-700 pr-1">
                <ChatBubbleOutlineIcon style={{ height: 17 }} />
              </span>
              {data.comments.length}
              <span className="flex items-center justify-center text-sm text-green-700 pr-1">
                <RemoveRedEyeOutlinedIcon style={{ height: 17 }} />
              </span>
              {data.view}
            </div>
            <div className="flex items-center">
              <span className="flex items-center justify-center text-sm text-gray-600">
                <BookmarkBorderIcon style={{ height: 20 }} />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-[1px] mt-5"></div>
        <div>
          <Comment />
        </div>
      </div>
      <div className="h-[7vh]">
        <CommentInput />
      </div>
    </div>
  );
};
