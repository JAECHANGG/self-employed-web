import { ExpandBoardPreviewPresenter } from "./ExpandBoardPreviewPresenter";

export const BestBoardPreview = () => {
  const bestBoradPreviewItems = [
    {
      title: "모던 자바스크립트1",
      isLike: 1,
    },
    {
      title: "모던 자바스크립트2",
      isLike: 2,
    },
    {
      title: "모던 자바스크립트3",
      isLike: 3,
    },
    {
      title: "모던 자바스크립트4",
      isLike: 4,
    },
    {
      title: "모던 자바스크립트5",
      isLike: 5,
    },
  ];

  return (
    <ExpandBoardPreviewPresenter
      boardPreviewTitle="인기 게시판"
      items={bestBoradPreviewItems}
    />
  );
};
