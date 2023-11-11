// "use client";

import { BestBoardPreview } from "@/components/board-preview/BestBoardPreview";
import { MockBoardPreview } from "@/components/board-preview/MockBoard";
import { RecentBoardPreview } from "@/components/board-preview/RecentBoardPreview";
import { PromotionSwiper } from "@/components/swiper/PromotionSwiper";
import { useGetPostsByCategoryQuery } from "@/query/post-query";
import { connectDB } from "@/util/database";
import { v4 as uuidv4 } from "uuid";

const componentList = [
  { component: <PromotionSwiper /> },
  { component: <BestBoardPreview /> },
  { component: <RecentBoardPreview /> },
  { component: <MockBoardPreview /> },
];

export default async function HomePage() {
  const client = await connectDB;
  const db = client.db("forum");
  // 해당 collection 의 모든 데이터를 가져옴.
  const result = await db.collection("post").find().toArray();

  console.log(result);
  return (
    <div className="h-[90vh] overflow-x-hidden overflow-y-auto px-5 py-7">
      {componentList.map((item) => (
        <section key={uuidv4()}>{item.component}</section>
      ))}
    </div>
  );
}
