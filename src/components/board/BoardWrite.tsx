"use client";

import { useBottomSheet } from "@/hooks/useBottomSheet";
import { useCreatePostMutation } from "@/query/post-query";
import { CreatePostPayload } from "@/types/post/payload";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RightArrow from "../../../public/asset/svg/right_arrow.svg";
import { Spinner } from "../Spinner";
import CategoryBottomSheet from "../bottom-sheet/CategoryBottomSheet";
import { BoardTitleMap } from "./BoardTitleMap";

interface Props {
  category: string;
}

export const BoardWrite = ({ category }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const initPayload: CreatePostPayload = {
    title: "",
    category,
    content: "",
    socialId: "",
  };
  const [payload, setPayload] = useState<CreatePostPayload>(initPayload);
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const createPostMutation = useCreatePostMutation();

  const handleClickCreateButton = () => {
    createPostMutation.mutate(payload, {
      onSuccess: (response) => {
        //!! TODO replace 되도록
        router.replace(`/boards/${payload.category}/${response.id}`);
      },
    });
  };

  const handleChangePayload = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleClickCategory = (category: string) => {
    setPayload({ ...payload, category });
    closeBottomSheet();
  };

  useEffect(() => {
    if (status === "authenticated") {
      setPayload({ ...payload, socialId: session.user.id });
    }
  }, [status]);

  if (!session) {
    // TODO session 없음 처리
    return <div>session없음</div>;
  }

  return (
    <section className="h-full p-4 text-white">
      {createPostMutation.isLoading && <Spinner />}
      <div className="h-full">
        <div className="flex justify-end mb-2">
          <button className="right-2" onClick={handleClickCreateButton}>
            완료
          </button>
        </div>
        <div
          className="flex justify-between items-center pb-3 border-b border-slate-300 text-lg font-normal"
          onClick={() =>
            openBottomSheet({
              title: "카테고리 선택",
              children: (
                <CategoryBottomSheet
                  category={category}
                  onClick={handleClickCategory}
                />
              ),
            })
          }
        >
          <div>
            {Object.keys(BoardTitleMap).find(
              (key) => BoardTitleMap[key].id === payload.category
            ) || "freeboard"}
          </div>
          <RightArrow />
        </div>
        <div className="pt-4 pb-3">
          <input
            className="w-full text-lg font-normal focus:outline-none bg-black pb-3 border-b border-slate-300 focus:border-white placeholder:text-[#363636]"
            placeholder="제목을 입력해주세요."
            onChange={handleChangePayload}
            name="title"
            value={payload.title}
          />
        </div>
        <textarea
          className="w-full h-[200px] font-medium scrollbar-hide resize-none focus:outline-none bg-black mt-4  pb-3 border-b border-slate-300 focus:border-white placeholder:text-[#363636]"
          placeholder={`내용을 입력해주세요.

다음과 같은 행위를 금지합니다.

- 욕설 사용
- 음란물 게시
- 그 외 분란을 일으킬 수 있는 글`}
          onChange={handleChangePayload}
          name="content"
          value={payload.content}
        />
      </div>
    </section>
  );
};
