import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SchoolIcon from "@mui/icons-material/School";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Link from "next/link";
import React from "react";

interface boardComponent {
  id: string;
  icon: React.ReactNode;
}

export const boardTitleMap: { [key: string]: boardComponent } = {
  인기게시판: { id: "bestboard", icon: <ThumbUpAltIcon /> },
  자유게시판: { id: "freeboard", icon: <ArticleIcon /> },
  노하우게시판: { id: "knowhowboard", icon: <SchoolIcon /> },
  홍보게시판: { id: "promotionboard", icon: <CampaignIcon /> },
  구인구직게시판: { id: "jobseekingboard", icon: <PersonSearchIcon /> },
  "Q&A게시판": { id: "qandaboard", icon: <QuestionAnswerIcon /> },
};

const BoardsPage = () => {
  return (
    <>
      <ul className="space-y-1 p-4">
        {Object.keys(boardTitleMap).map((title, index) => (
          <li key={title}>
            <Link
              href={`/boards/${boardTitleMap[title].id}`}
              className="flex items-center justify-between mb-1 h-16 rounded-lg cursor-pointer"
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg">
                  {boardTitleMap[title].icon}
                </div>
                <div className="text-base ml-2">{title}</div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center">
                  <ChevronRightIcon />
                </div>
              </div>
            </Link>
            {index === 0 && <div className="bg-gray-200 h-[1px] my-5"></div>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BoardsPage;
