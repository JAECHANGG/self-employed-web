"use client";

import { useBottomSheet } from "@/hooks/useBottomSheet";
import { useGetPostByIdQuery, useUpdatePostMutation } from "@/query/post-query";
import { UpdatePostPayload } from "@/types/post/payload";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RightArrow from "../../../public/asset/svg/right_arrow.svg";
import { Spinner } from "../Spinner";
import CategoryBottomSheet from "../bottom-sheet/CategoryBottomSheet";
import { BoardTitleMap } from "./BoardTitleMap";

interface Props {
  slug: string;
}

export const BoardUpdate = ({ slug: id }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: post, isFetching } = useGetPostByIdQuery(id);

  const initPayload: UpdatePostPayload = {
    title: post?.title || "",
    category: post?.category || "",
    content: post?.content || "",
    id,
  };
  const [payload, setPayload] = useState<UpdatePostPayload>(initPayload);
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const updatePostMutation = useUpdatePostMutation();

  const handleClickUpdateButton = () => {
    updatePostMutation.mutate(payload, {
      onSuccess: (response) => {
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

  if (!session) {
    // TODO session 없음 처리
    return <div>session없음</div>;
  }

  if (updatePostMutation.isLoading || isFetching) {
    return <Spinner />;
  }

  return (
    <section className="h-full p-4 scrollbar-hide text-white">
      <div className="h-full">
        <div
          className="flex justify-between items-center pb-3 border-b border-slate-300 text-xl font-semibold text-white"
          onClick={() =>
            openBottomSheet({
              title: "카테고리 선택",
              children: (
                <CategoryBottomSheet
                  category={post?.category || "freeboard"}
                  onClick={handleClickCategory}
                />
              ),
            })
          }
        >
          <div>
            {Object.keys(BoardTitleMap).find(
              (key) => BoardTitleMap[key].id === post?.category
            ) || "freeboard"}
          </div>
          <RightArrow />
        </div>
        <div className="pt-4 pb-3">
          <input
            className="w-full text-2xl font-bold focus:outline-none"
            placeholder="제목을 입력해주세요."
            onChange={handleChangePayload}
            name="title"
            // value={payload.title}
            defaultValue={post?.title}
          />
        </div>
        <textarea
          className="w-full h-5/6 font-medium scrollbar-hide resize-none focus:outline-none"
          placeholder={`내용을 입력해주세요.

다음과 같은 행위를 금지합니다.
          
- 욕설 사용
- 음란물 게시
- 그 외 분란을 일으킬 수 있는 글`}
          onChange={handleChangePayload}
          name="content"
          // value={payload.content}
          defaultValue={post?.content}
        />
      </div>
      <button onClick={handleClickUpdateButton}>수정</button>
    </section>
  );
};
