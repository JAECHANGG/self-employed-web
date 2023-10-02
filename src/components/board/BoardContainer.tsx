import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { headers } from "next/headers";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
  {
    id: uuidv4(),
    title: "무자본 자영업 업종으로 뭐가 좋을까요? 질문드립니다.",
    content:
      "안녕하세요 이번에 회사를 그만두고 자영업을 시작하려고 합니다. 많은 분야가 있겠지만 현재는 요식업을 생각중인데 다른 괜찮은 아이템이 있을까요?",
    time: "17:30",
    nickname: "장사의 신",
    comment: 3,
    isLike: 7,
    view: 100,
  },
];

export const BoardContainer = () => {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path");

  return (
    <>
      <article className="h-full overflow-x-hidden overflow-y-auto p-4">
        {dummyData.map((data: any) => {
          return (
            <Link href={`${pathname}/${data.id}`}>
              <div
                key={data.id}
                className="border border-blue-200 rounded-lg mb-5 p-4 cursor-pointer"
              >
                <h1 className="text-2xl font-bold truncate mb-3">
                  {data.title}
                </h1>
                <div className="text-base line-clamp-2 mb-3">
                  {data.content}
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-bold mr-2">{data.nickname}</span>
                  <span>{data.time}</span>
                  <span className="text-red-500 ml-2 flex items-center">
                    <FavoriteBorderIcon style={{ height: 15 }} />
                    {data.isLike}
                  </span>
                  <span className="text-blue-500 ml-2 flex items-center">
                    <ChatBubbleOutlineIcon
                      style={{ height: 14, paddingTop: 2 }}
                    />
                    {data.comment}
                  </span>
                  <span className="text-green-500 ml-2 flex items-center">
                    <RemoveRedEyeOutlinedIcon style={{ height: 16 }} />
                    {data.view}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </article>
    </>
  );
};
