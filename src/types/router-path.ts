export enum RouterPath {
  Home = "/",
  SignIn = "/signin",
  Notifications = "/notifications",
  MyPage = "/mypage",
  Settings = "/settings",
  Board = "/board",
  BestBoard = "/board/bestboard",
  FreeBoard = "/board/freeboard",
  KnowHowBoard = "/board/knowhowboard",
  PromotionBoard = "/board/promotionboard",
  JobSeekingBoard = "/board/jobseekingboard",
  QnABoard = "/board/qnaboard",
  BestBoardDetail = "/board/bestboard/:id",
  FreeBoardDetail = "/board/freeboard/:id",
  KnowHowBoardDetail = "/board/knowhowboard/:id",
  PromotionBoardDetail = "/board/promotionboard/:id",
  JobSeekingBoardDetail = "/board/jobseekingboard/:id",
  QnABoardDetail = "/board/qnaboard/:id",
  KakaoRedirect = "/oauth/callback/kakao",
  NaverRedirect = "/oauth/callback/naver",
  GoogleRedirect = "/oauth/callback/google",
}
