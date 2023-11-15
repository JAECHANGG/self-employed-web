import { CommentDto } from "@/types/post/dto";
import { MMDDHHmmTime } from "@/util/time-util";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  comments: CommentDto[];
}

export const Comment = ({ comments }: Props) => {
  console.log("comments", comments);
  return (
    <>
      {comments.map(({ author, comment, like, createdAt }) => (
        <div className="flex flex-col" key={author._id}>
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 mr-2">
              <img
                src={author.image}
                alt="profile_image"
                className="rounded-full"
              />
            </div>
            <div className="font-bold">{author.username}</div>
            <div className="ml-2 text-sm opacity-70">
              {MMDDHHmmTime(createdAt)}
            </div>
          </div>
          <div className="mb-2">{comment}</div>
          <div className="flex">
            <span className="mr-2 text-red-600">
              <FavoriteBorderIcon style={{ height: 17 }} /> {like}
            </span>
            <span className="text-blue-700">
              <ChatBubbleOutlineIcon style={{ height: 17 }} /> 0
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
