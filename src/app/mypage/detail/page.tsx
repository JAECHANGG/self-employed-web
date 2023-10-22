"use client";

import { useGetMeQuery } from "@/query/me-query";

export default function DetailPage() {
  const { data, isLoading } = useGetMeQuery();

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>DetailPage</div>
      <div>{data?.data.email}</div>
    </div>
  );
}
