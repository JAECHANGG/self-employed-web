"use client";

import {
  useDeleteSearchKeywordMutation,
  useDeleteSearchKeywordAllMutation,
  useGetSearchKeywordsQuery,
} from "@/query/user-query";
import { useSession } from "next-auth/react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Spinner } from "../Spinner";
import {
  DeleteSearchKeywordPayload,
  DeleteSearchKeywordAllPayload,
} from "@/types/user/payload";

export const SearchKeyword = () => {
  const { data: session } = useSession();
  const useGetSearchKeywords = useGetSearchKeywordsQuery({
    userId: session?.user?.id || "",
  });
  const deleteSearchKeyword = useDeleteSearchKeywordMutation();
  const deleteSearchKeywordAll = useDeleteSearchKeywordAllMutation();

  const handleClickDeleteSearchKeyword = (keywordId: string) => {
    const payload: DeleteSearchKeywordPayload = {
      userId: session?.user?.id || "",
      keywordId,
    };
    deleteSearchKeyword.mutate(payload);
  };

  const handleClickDeleteSearchKeywordAll = () => {
    const payload: DeleteSearchKeywordAllPayload = {
      userId: session?.user.id || "",
    };
    deleteSearchKeywordAll.mutate(payload);
  };

  if (useGetSearchKeywords.isLoading)
    return (
      <div className="h-full">
        <Spinner />
      </div>
    );

  if (!useGetSearchKeywords.data || useGetSearchKeywords?.data?.length === 0) {
    return (
      <div className="h-full flex justify-center pt-28 text-xl font-semibold">
        최근 검색한 내용이 없습니다.
      </div>
    );
  }

  console.log(useGetSearchKeywords.data);

  return (
    <section className="p-4 h-full">
      <header className="flex justify-between items-center mb-1">
        <h1 className="font-semibold">최근 검색</h1>
        <span onClick={handleClickDeleteSearchKeywordAll}>전체 삭제</span>
      </header>
      <ul>
        {useGetSearchKeywords.data?.map((searchKeyword) => (
          <li
            key={searchKeyword.id}
            className="flex justify-between items-center py-1"
          >
            <div className="flex items-center">
              <SearchIcon className="text-md mr-1" />
              <span className="text-lg">{searchKeyword.keyword}</span>
            </div>
            <div
              onClick={() => handleClickDeleteSearchKeyword(searchKeyword.id)}
            >
              <DeleteOutlineIcon />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
