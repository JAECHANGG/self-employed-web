"use client";

import {
  useGetPostByIdQuery,
  useIncreaseViewMutation,
} from "@/query/post-query";
import { useGetUserQuery } from "@/query/user-query";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "../Spinner";
import AddCollection from "../collection/AddCollection";
import DeleteCollection from "../collection/DeleteCollection";
import { LikePost } from "../like/post/LikePost";
import { UnlikePost } from "../unlike/post/UnlikePost";
import { BoardDetailContentHeader } from "./BoardDetailContentHeader";
import { Comment } from "./comment/Comment";
import { CommentInput } from "./comment/CommentInput";

interface Props {
  id: string;
}

export const BoardDetailContainer = ({ id }: Props) => {
  const { data, isLoading } = useGetPostByIdQuery(id);
  const { data: me } = useGetUserQuery();
  const enabled = useRef(true);
  const increaseView = useIncreaseViewMutation();
  const [selectedCommentId, setSelectedCommentId] = useState("");

  useEffect(() => {
    if (!enabled.current) {
      return;
    }

    increaseView.mutate({
      postId: id,
    });
    enabled.current = false;
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || !me) {
    return <div>데이터가 없습니다...</div>;
  }

  const isLike = data.like.map((likeUser) => likeUser.id).includes(me.id);
  const isCollection = me.collections.map((post) => post.id).includes(data.id);

  return (
    <section className="flex flex-col h-full overflow-auto">
      <main className="flex flex-col p-4">
        <header className="mb-5">
          <BoardDetailContentHeader data={data} me={me?.id || ""} />
        </header>
        <h1 className="font-bold text-2xl mb-5">{data.title}</h1>
        <span className="mb-10">{data.content}</span>
        <footer className="flex justify-between">
          <div className="flex items-center">
            {isLike ? (
              <UnlikePost
                postId={data.id}
                user={me}
                likeNumber={data.like.length}
              />
            ) : (
              <LikePost
                postId={data.id}
                user={me}
                likeNumber={data.like.length}
              />
            )}
            <span className="flex items-center justify-center text-sm text-blue-700 pr-1">
              <ModeCommentOutlinedIcon style={{ height: 17 }} />
            </span>
            {data.comments.length}
            <span className="flex items-center justify-center text-sm text-green-700 pr-1">
              <RemoveRedEyeOutlinedIcon style={{ height: 17 }} />
            </span>
            {data.view}
          </div>
          <div className="flex items-center">
            {isCollection ? (
              <DeleteCollection postId={data.id} userId={me.id} />
            ) : (
              <AddCollection postId={data.id} userId={me.id} />
            )}
          </div>
        </footer>
      </main>
      <div className="bg-myColor-white-gray w-full py-2" />
      <footer className="px-4 pt-4 pb-10">
        <Comment
          me={me}
          comments={data.comments}
          postId={data.id}
          selectedCommentId={selectedCommentId}
          setSelectedCommentId={setSelectedCommentId}
        />
      </footer>
      <CommentInput
        id={id}
        userObjectId={me.id}
        selectedCommentId={selectedCommentId}
        setSelectedCommentId={setSelectedCommentId}
      />
    </section>
  );
};
