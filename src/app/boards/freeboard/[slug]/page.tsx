import { BoardDetailContainer } from "@/components/board-detail/BoardDetailContainer";

interface Props {
  params: { slug: string };
}

export default function FreeBoardDetailPage({ params: { slug } }: Props) {
  console.log(slug);
  return <BoardDetailContainer />;
}
