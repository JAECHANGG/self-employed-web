"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FoodIcon } from "../image/FoodIcon";
import { ReactNode } from "react";
import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";

// 카테고리 : 음식, 카페, 술, 쇼핑몰, 편의점, 미용, 스타트업, 스포츠, 오락, 교육, 애견, 기타

interface PromotionView {
  backgroundColor: string;
  titleColor: string;
  subTitleColor: string;
  icon: ReactNode;
}

export const PromotionSwiper = () => {
  // const { fullSearchDialogState } = useFullSearchDialog();

  const promotionViewMap: { [key: string]: PromotionView } = {
    음식: {
      backgroundColor: "#F44336",
      titleColor: "#ffffff",
      subTitleColor: "#ffffff",
      icon: <FoodIcon />,
    },
  };

  return (
    <div>
      {/* {!fullSearchDialogState.isOpen && (
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          loopedSlides={1}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <section className="flex justify-between items-center bg-red-500 p-4 ">
              <div className="flex flex-col">
                <span className="text-xl font-semibold mb-2 text-white">
                  [서울 강서구] 교동짬뽕
                </span>
                <span className="text-lg text-white">
                  {'"성시경의 먹을텐데" 출연한 맛집'}
                </span>
              </div>
              <div className="flex items-center justify-center">
                {promotionViewMap["음식"].icon}
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex justify-between items-center bg-red-500 p-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold mb-2 text-white">
                  [서울 성수구] 이모네 감자탕
                </span>
                <span className="text-lg text-white">
                  서울에서 가장 맛있는 감자탕
                </span>
              </div>
              <div className="flex items-center justify-center">
                {promotionViewMap["음식"].icon}
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      )} */}
    </div>
  );
};
