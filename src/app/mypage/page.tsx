import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SchoolIcon from "@mui/icons-material/School";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface boardComponent {
  id: string;
  icon: React.ReactNode;
}

export const metadata: Metadata = {
  title: "마이페이지",
  description: "나의 정보를 확인 및 수정",
};

const boardTitleMap: { [key: string]: boardComponent } = {
  "내 정보 보기": { id: "detail", icon: <ThumbUpAltIcon /> },
  "내 컬렉션 보기": { id: "collections", icon: <ArticleIcon /> },
  "알림 설정": { id: "freeboard", icon: <ArticleIcon /> },
  version: { id: "knowhowboard", icon: <SchoolIcon /> },
  로그아웃: { id: "logout", icon: <CampaignIcon /> },
  회원탈퇴: { id: "jobseekingboard", icon: <PersonSearchIcon /> },
};

export default function MyPage() {
  return (
    <ul className="space-y-1 py-4">
      {Object.keys(boardTitleMap).map((title, index) => (
        <li key={title}>
          <Link
            href={`/mypage/${boardTitleMap[title].id}`}
            className="flex items-center justify-between mb-1 h-16 px-4 rounded-lg cursor-pointe text-white"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg">{boardTitleMap[title].icon}</div>
              <div className="text-base ml-2">{title}</div>
            </div>
            <div className="flex">
              <div className="flex items-center justify-center">
                <ChevronRightIcon />
              </div>
            </div>
          </Link>
          {index === 0 && <div className="bg-gray-200 h-[1px] my-5"></div>}
        </li>
      ))}
    </ul>
  );
}
