"use Client";

import { useDeletePostMutation } from "@/query/post-query";
import { PostByIdDto } from "@/types/post/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomIconButton from "../CustomIconButton";
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
        <header className="mr-3">
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
      <footer className="h-12">
        {user.id === me && (
          <Link
            href={`/boards/update/${category}/${id}`}
            style={{ marginRight: "4px" }}
          >
            <CustomIconButton>
              <EditOutlinedIcon style={{ height: 20 }} />
            </CustomIconButton>
          </Link>
        )}
        {user.id === me && (
          <CustomIconButton>
            <DeleteOutlineOutlinedIcon
              onClick={() => handleClickDeletePost(id)}
              style={{ height: 20 }}
            />
          </CustomIconButton>
        )}
      </footer>
    </section>
  );
};
