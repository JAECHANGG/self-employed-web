"use Client";

import { useDeletePostMutation } from "@/query/post-query";
import { PostByIdDto } from "@/types/post/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        router.push(`/boards/${category}`);
      },
    });
  };

  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-row">
        <div className="mr-6">
          <div className="w-12 h-12">
            <img
              src={user.image}
              alt="profile_image"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">{user.username}</div>
          <div className="text-sm mt-1 opacity-70">
            {MMDDHHmmTime(createdAt)}
          </div>
        </div>
      </div>
      {user.id === me && (
        <Link href={`/boards/update/${category}/${id}`} className="">
          수정하기
        </Link>
      )}
      {user.id === me && (
        <button onClick={() => handleClickDeletePost(id)} className="">
          삭제하기
        </button>
      )}
    </section>
  );
};
