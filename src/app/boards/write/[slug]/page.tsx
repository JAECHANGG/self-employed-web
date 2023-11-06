import { BoardWrite } from "@/components/board/BoardWrite";

interface Props {
  params: { slug: string };
}

export default function BoardWritePage({ params: { slug } }: Props) {
  return (
    <div>
      {slug}
      <BoardWrite />
    </div>
  );
}
