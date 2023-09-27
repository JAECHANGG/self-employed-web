"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FoodIcon } from "../image/FoodIcon";
import { ReactNode } from "react";

// 카테고리 : 음식, 카페, 술, 쇼핑몰, 편의점, 미용, 스타트업, 스포츠, 오락, 교육, 애견, 기타

interface PromotionView {
  backgroundColor: string;
  titleColor: string;
  subTitleColor: string;
  icon: ReactNode;
}

export const PromotionSwiper = () => {
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
          <section className="flex justify-between items-center bg-red-500 rounded-lg p-4">
            <div className="flex flex-col">
              <span className="text-xl font-semibold mb-2 text-white">
                모던 자바스크립트 딥다이브
              </span>
              <span className="text-lg text-white">
                일본어 문법 무작정 따라하기
              </span>
            </div>
            <div className="flex items-center justify-center">
              {promotionViewMap["음식"].icon}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-between items-center bg-red-500 rounded-lg p-4">
            <div className="flex flex-col">
              <span className="text-xl font-semibold mb-2 text-white">
                모던 자바스크립트 딥다이브
              </span>
              <span className="text-lg text-white">
                일본어 문법 무작정 따라하기
              </span>
            </div>
            <div className="flex items-center justify-center">
              {promotionViewMap["음식"].icon}
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
