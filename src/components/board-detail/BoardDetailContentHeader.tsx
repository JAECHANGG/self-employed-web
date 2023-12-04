"use Client";

import { useDeletePostMutation } from "@/query/post-query";
import { PostByIdDto } from "@/types/post/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomTextButton from "../CustomTextButton";
import { Spinner } from "../Spinner";

interface Props {
  data: PostByIdDto;
  me: string;
}

export const BoardDetailContentHeader = ({ data, me }: Props) => {
  const { user, id, category, createdAt } = data;
  const deletePostMutation = useDeletePostMutation();
  const router = useRouter();

  const handleClickDeletePost = (id: string) => {
    deletePostMutation.mutate(id, {
      onSuccess: () => {
        router.replace(`/boards/${category}`);
      },
    });
  };

  return (
    <section className="flex items-center justify-between">
      {deletePostMutation.isLoading && <Spinner />}
      <div className="flex flex-row">
        <header className="mr-6">
          <div className="w-12 h-12">
            <img
              src={user.image}
              alt="profile_image"
              className="rounded-full"
            />
          </div>
        </header>
        <main className="flex flex-col">
          <div className="font-bold">{user.username}</div>
          <div className="text-sm mt-1 opacity-70">
            {MMDDHHmmTime(createdAt)}
          </div>
        </main>
      </div>
      <footer>
        {user.id === me && (
          <Link href={`/boards/update/${category}/${id}`}>
            <CustomTextButton onClick={() => {}} title="수정" />
          </Link>
        )}
        {user.id === me && (
          <CustomTextButton
            onClick={() => handleClickDeletePost(id)}
            title="삭제"
          />
        )}
      </footer>
    </section>
  );
};
