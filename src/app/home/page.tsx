import { BestBoardPreview } from "@/components/board-preview/BestBoardPreview";
import { MockBoardPreview } from "@/components/board-preview/MockBoard";
import { RecentBoardPreview } from "@/components/board-preview/RecentBoardPreview";
import { BoardContainer } from "@/components/board/BoardContainer";
import { PromotionSwiper } from "@/components/swiper/PromotionSwiper";
import { Metadata } from "next";
import { v4 as uuidv4 } from "uuid";

export const metadata: Metadata = {
  title: "홈페이지",
  description: "장사의 신에 오신 것을 환영합니다.",
};

export default async function HomePage() {
  return (
    <div className="h-full overflow-x-hidden">
      <PromotionSwiper />
      <BoardContainer />
    </div>
  );
}
