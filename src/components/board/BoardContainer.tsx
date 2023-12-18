"use client";

import { PostByCategoryDto } from "@/types/post/dto";
import { HHmmTime } from "@/util/time-util";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Link from "next/link";
import { AddPostFloatingButton } from "../AddPostFloatingButton";
import { Spinner } from "../Spinner";

const invisibleAddPostFloatingButtonCategories = ["bestboard", "allboard", ""];

interface Props {
  category: string;
  posts: PostByCategoryDto[] | undefined;
  isFetching: boolean;
}

export const BoardContainer: React.FC<Props> = ({
  category,
  posts,
  isFetching,
}) => {
  return (
    <>
      <article className="overflow-x-hidden overflow-y-auto scrollbar-hide">
        {isFetching && <Spinner />}
        {!invisibleAddPostFloatingButtonCategories.includes(category) && (
          <AddPostFloatingButton category={category} />
        )}
        {posts?.map((data) => {
          return (
            <Link href={`/boards/${data.category}/${data.id}`} key={data.id}>
              <div className="bg-white border-b-2 border-myColor-white-gray p-4 cursor-pointer">
                <h1 className="text-xl font-bold truncate mb-3">
                  {data.title}
                </h1>
                <div className="text-base line-clamp-2 mb-3">
                  {data.content}
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-bold mr-2">{data.username}</span>
                  <span>{HHmmTime(data.createdAt)}</span>
                  <span className="text-red-500 ml-2 flex items-center">
                    <FavoriteBorderIcon style={{ height: 15 }} />
                    {data.likeNumber}
                  </span>
                  <span className="text-blue-500 ml-2 flex items-center">
                    <ChatBubbleOutlineOutlinedIcon
                      style={{ height: 14, paddingTop: 2 }}
                    />
                    {data.commentNumber}
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
