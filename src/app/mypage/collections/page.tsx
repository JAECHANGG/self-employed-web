"use client";

import { Spinner } from "@/components/Spinner";
import { BoardContainer } from "@/components/board/BoardContainer";
import { useGetUserQuery } from "@/query/user-query";

export default function CollectionsPage() {
  const { data: user, isFetching } = useGetUserQuery();

  if (isFetching) return <Spinner />;

  if (!user?.collections || user.collections.length === 0) {
    return (
      <div className="h-full flex justify-center pt-28 text-xl font-semibold">
        저장한 컬렉션이 없습니다.
      </div>
    );
  }

  return (
    <BoardContainer
      category=""
      posts={user.collections}
      isFetching={isFetching}
    />
  );
}
