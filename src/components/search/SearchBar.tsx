"use client";

import { postApi } from "@/api/post/post-api";
import { SearchValue } from "@/app/atom";
import useDebounce from "@/hooks/debounce";
import { useGetSearchPostsAllQuery } from "@/query/post-query";
import { useSession } from "next-auth/react";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

export default function SearchBar() {
  const { data: session } = useSession();
  const [keyword, setKeyword] = useRecoilState(SearchValue);
  const inputRef = useRef<HTMLInputElement | null>(null);
  // useGetSearchPostsAllQuery({
  //   userId: session?.user.id,
  //   keyword,
  // });
  const debouncedKeyword = useDebounce(keyword);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await postApi.getSearchPostsAll({
        userId: session?.user.id || "",
        keyword,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full px-2 mt-1">
      <input
        ref={inputRef}
        className="w-full pl-4 pr-2 bg-gray-100 focus:outline-none overflow-hidden rounded-sm py-1"
        placeholder="검색어를 입력해주세요"
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
      />
    </form>
  );
}
