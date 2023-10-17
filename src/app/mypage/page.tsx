import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SchoolIcon from "@mui/icons-material/School";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import React from "react";

interface boardComponent {
  id: string;
  icon: React.ReactNode;
}

const boardTitleMap: { [key: string]: boardComponent } = {
  닉네임: { id: "bestboard", icon: <ThumbUpAltIcon /> },
  "알림 설정": { id: "freeboard", icon: <ArticleIcon /> },
  version: { id: "knowhowboard", icon: <SchoolIcon /> },
  로그아웃: { id: "promotionboard", icon: <CampaignIcon /> },
  회원탈퇴: { id: "jobseekingboard", icon: <PersonSearchIcon /> },
};

export default function MyPage() {
  return (
    <ul className="space-y-1 p-4">
      {Object.keys(boardTitleMap).map((title, index) => (
        <li key={title}>
          <div
            id={boardTitleMap[title].id}
            className="flex items-center justify-between mb-1 h-16 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg">
                {boardTitleMap[title].icon}
              </div>
              <div className="text-base ml-2">{title}</div>
            </div>
            <div className="flex">
              <div className="flex items-center justify-center">
                <ChevronRightIcon style={{ color: "#012851" }} />
              </div>
            </div>
          </div>
          {index === 0 && <div className="bg-gray-200 h-[1px] my-5"></div>}
        </li>
      ))}
    </ul>
  );
}