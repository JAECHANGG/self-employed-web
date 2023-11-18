import { BoardDetailContainer } from "@/components/board-detail/BoardDetailContainer";

interface Props {
  params: { slug: string };
}

export default async function FreeBoardDetailPage({
  params: { slug: id },
}: Props) {
  return <BoardDetailContainer id={id} />;
}
