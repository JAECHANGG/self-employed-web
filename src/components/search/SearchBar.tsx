"use client";

import { SearchValue } from "@/app/atom";
import useDebounce from "@/hooks/debounce";
import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";
import { useCreateSearchKeywordMutation } from "@/query/user-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

export default function SearchBar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [keyword, setKeyword] = useRecoilState(SearchValue);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { closeFullSearchDialog } = useFullSearchDialog();
  const useCreateSearchKeyword = useCreateSearchKeywordMutation();
  const debouncedKeyword = useDebounce(keyword);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword) {
      console.log("검색어를 입력해주세요"); // TODO input validate 처리
      return;
    }
    useCreateSearchKeyword.mutate(
      {
        userId: session?.user?.id || "",
        keyword: keyword,
      },
      {
        onSuccess: () => {
          closeFullSearchDialog();
          router.push(`/search/${encodeURIComponent(keyword)}`);
        },
      }
    );
  };

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current?.focus();
    }
    return () => {
      setKeyword("");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full px-2 mt-1">
      <input
        ref={inputRef}
        className="w-full pl-4 pr-2 bg-[#121212] text-white focus:outline-none overflow-hidden rounded-md py-1 placeholder:text-[#FFFFFFE0]"
        placeholder="검색어를 입력해주세요"
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
      />
    </form>
  );
}
