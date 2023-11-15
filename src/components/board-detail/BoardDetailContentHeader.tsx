import Link from "next/link";

interface Props {
  src: string;
  userId: string;
  me: string;
  id: string;
  category: string;
}

export const BoardDetailContentHeader = ({
  src,
  userId,
  me,
  id,
  category,
}: Props) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-row">
        <div className="mr-6">
          <div className="w-12 h-12">
            <img src={src} alt="profile_image" className="rounded-full" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">장사의 신중의 신</div>
          <div className="text-sm mt-1 opacity-70">07/19 17:50</div>
        </div>
      </div>
      {userId === me && (
        <Link href={`/boards/update/${category}/${id}`} className="">
          수정하기
        </Link>
      )}
    </section>
  );
};
