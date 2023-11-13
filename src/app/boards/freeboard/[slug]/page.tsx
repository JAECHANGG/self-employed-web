import { postApi } from "@/api/post/post-api";
import { BoardDetailContainer } from "@/components/board-detail/BoardDetailContainer";

interface Props {
  params: { slug: string };
}

export default async function FreeBoardDetailPage({
  params: { slug: id },
}: Props) {
  console.log(id);
  const response = await postApi.getPostById(id);
  console.log(response);
  return <BoardDetailContainer />;
}
