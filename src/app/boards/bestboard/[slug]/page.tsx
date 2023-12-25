import { BoardDetailController } from "@/components/board-detail/BoardDetailController";

interface Props {
  params: { slug: string };
}

export default function BestBoardDetailPage({ params: { slug: id } }: Props) {
  return <BoardDetailController id={id} />;
}
