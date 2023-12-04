import { LikeComment } from "@/components/like/comment/LikeComment";
import { UnlikeComment } from "@/components/unlike/comment/UnlikeComment";
import { CommentDto } from "@/types/post/dto";
import { UserDto } from "@/types/user/dto";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { Dispatch, SetStateAction } from "react";
import { Reply } from "../reply/Reply";
import CommentHeader from "./CommentHeader";

interface Props {
  me: UserDto;
  comments: CommentDto[];
  postId: string;
  selectedCommentId: string;
  setSelectedCommentId: Dispatch<SetStateAction<string>>;
}

export const Comment = ({
  me,
  comments,
  postId,
  selectedCommentId,
  setSelectedCommentId,
}: Props) => {
  return (
    <>
      {comments.map(({ user, comment, like, createdAt, id, replies }) => {
        const isLike = like.map((likeUser) => likeUser.id).includes(me.id);

        return (
          <div className="flex flex-col mb-2" key={id}>
            <div
              className={`flex flex-col mb-2 ${
                selectedCommentId === id && "bg-pink-300"
              }`}
            >
              <CommentHeader
                user={user}
                createdAt={createdAt}
                me={me.id}
                commentId={id}
                postId={postId}
                selectedCommentId={selectedCommentId}
                setSelectedCommentId={setSelectedCommentId}
                comment={comment}
              />
              <div className="mb-1">{comment}</div>
              <div className="flex">
                {isLike ? (
                  <UnlikeComment
                    postId={postId}
                    commentId={id}
                    user={me}
                    likeNumber={like.length}
                  />
                ) : (
                  <LikeComment
                    postId={postId}
                    commentId={id}
                    user={me}
                    likeNumber={like.length}
                  />
                )}
                {/* <span className="mr-2 text-red-600">
                <FavoriteBorderIcon style={{ height: 17 }} /> {like.length}
              </span> */}
                <span className="text-blue-700">
                  <ModeCommentOutlinedIcon style={{ height: 17 }} />
                  {replies.length}
                </span>
              </div>
            </div>

            <Reply me={me} replies={replies} postId={postId} commentId={id} />
          </div>
        );
      })}
    </>
  );
};
