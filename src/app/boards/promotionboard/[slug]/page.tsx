import { BoardDetailContainer } from "@/components/board-detail/BoardDetailContainer";

interface Props {
  params: { slug: string };
}

export default function PromotionBoardDetailPage({
  params: { slug: id },
}: Props) {
  return <BoardDetailContainer id={id} />;
}
