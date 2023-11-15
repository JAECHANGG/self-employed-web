import { BoardUpdate } from "@/components/board/BoardUpdate";

interface Props {
  params: { slug: string };
}

export default function BoardUpdatePage({ params: { slug } }: Props) {
  return (
    <div>
      {slug}
      <BoardUpdate slug={slug[1]} />
    </div>
  );
}
