import { BoardComponent } from "@/types/board-component";
import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SchoolIcon from "@mui/icons-material/School";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export const BoardTitleMap: { [key: string]: BoardComponent } = {
  전체게시판: { id: "allboard", icon: <ArticleIcon /> },
  인기게시판: { id: "bestboard", icon: <ThumbUpAltIcon /> },
  자유게시판: { id: "freeboard", icon: <ArticleIcon /> },
  노하우게시판: { id: "knowhowboard", icon: <SchoolIcon /> },
  홍보게시판: { id: "promotionboard", icon: <CampaignIcon /> },
  구인구직게시판: { id: "jobseekingboard", icon: <PersonSearchIcon /> },
  "Q&A게시판": { id: "qnaboard", icon: <QuestionAnswerIcon /> },
};
