import { BoardTitleMap } from "@/components/board/BoardTitleMap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const BoardsPage = () => {
  return (
    <>
      <ul className="space-y-1 py-4">
        {Object.keys(BoardTitleMap).map((title, index) => (
          <li key={title}>
            <Link
              href={`/boards/${BoardTitleMap[title].id}`}
              className="flex items-center justify-between mb-1 h-16 px-4 rounded-lg cursor-pointer text-white"
            >
              <div className="flex items-center ">
                <div className="p-2 rounded-lg">
                  {BoardTitleMap[title].icon}
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
