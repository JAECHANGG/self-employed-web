import { BoardDetailController } from "@/components/board-detail/BoardDetailController";
import { UserDto } from "@/types/user/dto";
import { headers } from "next/headers";

interface Props {
  params: { slug: string };
}

export const getUser = async () => {
  //! 추후 axios로 변경 (임시조치)
  // TODO server component에서 axios로 api routes에 요청하면 401 에러 발생하는 문제 해결하기
  const response = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: headers(),
  });
  const user = (await response.json()) as UserDto;
  return user;
};

export default async function FreeBoardDetailPage({
  params: { slug: id },
}: Props) {
  return <BoardDetailController id={id} />;
}
