import { PostByIdDto } from "@/types/post/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import Link from "next/link";

interface Props {
  data: PostByIdDto;
  me: string;
}

export const BoardDetailContentHeader = ({ data, me }: Props) => {
  const { author, _id, category, createdAt } = data;
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-row">
        <div className="mr-6">
          <div className="w-12 h-12">
            <img
              src={author.image}
              alt="profile_image"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">{author.username}</div>
          <div className="text-sm mt-1 opacity-70">
            {MMDDHHmmTime(createdAt)}
          </div>
        </div>
      </div>
      {author.socialId === me && (
        <Link href={`/boards/update/${category}/${_id}`} className="">
          수정하기
        </Link>
      )}
    </section>
  );
};
