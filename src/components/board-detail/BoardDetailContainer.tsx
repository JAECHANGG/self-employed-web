import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { BoardDetailContentHeader } from "./BoardDetailContentHeader";
import { Comment } from "./comment/Comment";
import { CommentInput } from "./comment/CommentInput";

export const BoardDetailContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[83vh]">
        <div className="flex flex-col">
          <div className="mb-5">
            <BoardDetailContentHeader />
          </div>
          <div className="font-bold text-2xl mb-5">
            무자본 자영업 업종으로 뭐가 좋을까요? 추천해주십쇼 형님들
          </div>
          <div className="mb-10">
            안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은
            분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이
            있을까요?
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="flex items-center justify-center text-sm text-red-600 pr-1">
                <FavoriteBorderIcon style={{ height: 17 }} />
              </span>
              10
              <span className="flex items-center justify-center text-sm text-blue-700 pr-1">
                <ChatBubbleOutlineIcon style={{ height: 17 }} />
              </span>
              3
              <span className="flex items-center justify-center text-sm text-green-700 pr-1">
                <RemoveRedEyeOutlinedIcon style={{ height: 17 }} />
              </span>
              150
            </div>
            <div className="flex items-center">
              <span className="flex items-center justify-center text-sm text-gray-600">
                <BookmarkBorderIcon style={{ height: 20 }} />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-[1px] mt-5"></div>
        <div>
          <Comment />
        </div>
      </div>
      <div className="h-[7vh]">
        <CommentInput />
      </div>
    </div>
  );
};
