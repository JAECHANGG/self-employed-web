import { BoardDetailController } from "@/components/board-detail/BoardDetailController";

interface Props {
  params: { slug: string };
}

export default function QnABoardDetailPage({ params: { slug: id } }: Props) {
  return <BoardDetailController id={id} />;
}
