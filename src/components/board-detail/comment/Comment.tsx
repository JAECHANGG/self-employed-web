import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Comment = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2">
          <AccountCircleIcon style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="font-bold">댓글의 신</div>
        <div className="ml-2 text-sm opacity-70">07/19 18:10</div>
      </div>
      <div className="mb-2">
        [댓글] 티트리 시카 비건 쿨링 선 스틱 아무말 대잔치 레드 이레이징 크림
        포켓몬빵
      </div>
      <div className="flex">
        <span className="mr-2 text-red-600">
          <FavoriteBorderIcon style={{ height: 17 }} />2
        </span>
        <span className="text-blue-700">
          <ChatBubbleOutlineIcon style={{ height: 17 }} />
        </span>
      </div>
    </div>
  );
};
