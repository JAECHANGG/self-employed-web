import { HomeController } from "@/components/home/HomeController";
import { PromotionSwiper } from "@/components/swiper/PromotionSwiper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈페이지",
  description: "장사의 신에 오신 것을 환영합니다.",
};

export default async function HomePage() {
  return (
    <div className="h-full overflow-x-hidden scrollbar-hide">
      <PromotionSwiper />
      <HomeController />
    </div>
  );
}
