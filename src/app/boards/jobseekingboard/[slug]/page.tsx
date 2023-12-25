import { BoardDetailController } from "@/components/board-detail/BoardDetailController";

interface Props {
  params: { slug: string };
}

export default function JobseekingBoardDetailPage({
  params: { slug: id },
}: Props) {
  return <BoardDetailController id={id} />;
}
