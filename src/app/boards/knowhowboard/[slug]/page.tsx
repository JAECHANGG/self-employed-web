import { BoardDetailContainer } from "@/components/board-detail/BoardDetailContainer";

interface Props {
  params: { slug: string };
}

export default function KnowhowBoardDetailPage({
  params: { slug: id },
}: Props) {
  return <BoardDetailContainer id={id} />;
}
