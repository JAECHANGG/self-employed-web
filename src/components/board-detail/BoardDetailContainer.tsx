"use client";

import { useGetPostByIdQuery } from "@/query/post-query";
import { useGetUserQuery } from "@/query/user-query";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { postApi } from "@/api/post/post-api";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useEffect } from "react";
import { LikePost } from "../like/post/LikePost";
import { UnlikePost } from "../unlike/post/UnlikePost";
import { BoardDetailContentHeader } from "./BoardDetailContentHeader";
import { Comment } from "./comment/Comment";
import { CommentInput } from "./comment/CommentInput";

interface Props {
  id: string;
}

export const BoardDetailContainer = ({ id }: Props) => {
  const { data, isLoading, refetch } = useGetPostByIdQuery(id);
  const { data: me } = useGetUserQuery();
  console.log("comment@@@", data?.comments);

  const increaseView = async () => {
    await postApi.increaseView({
      postId: id,
    });
    refetch();
  };

  useEffect(() => {
    increaseView();
  }, []);

  if (isLoading) return <div>로딩중...</div>;

  if (!data || !me) {
    return <div>데이터가 없습니다...</div>;
  }

  const isLike = data.like.map((likeUser) => likeUser.id).includes(me.id);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[83vh]">
        <div className="flex flex-col">
          <div className="mb-5">
            <BoardDetailContentHeader data={data} me={me?.id || ""} />
          </div>
          <div className="font-bold text-2xl mb-5">{data.title}</div>
          <div className="mb-10">{data.content}</div>
          <div className="flex justify-between">
            <div className="flex items-center">
              {isLike ? (
                <UnlikePost
                  postId={data.id}
                  userId={me.id}
                  likeNumber={data.like.length}
                />
              ) : (
                <LikePost
                  postId={data.id}
                  userId={me.id}
                  likeNumber={data.like.length}
                />
              )}
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
          <Comment me={me} comments={data.comments} postId={data.id} />
        </div>
      </div>
      <div className="h-[7vh]">
        <CommentInput id={id} userObjectId={me.id} />
      </div>
    </div>
  );
};
