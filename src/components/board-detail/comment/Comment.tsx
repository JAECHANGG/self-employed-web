import { LikeComment } from "@/components/like/comment/LikeComment";
import { UnlikeComment } from "@/components/unlike/comment/UnlikeComment";
import { CommentDto } from "@/types/post/dto";
import { UserDto } from "@/types/user/dto";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
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
          <div className="flex flex-col mb-2 text-white" key={id}>
            <div
              className={`flex flex-col px-4 py-3 ${
                selectedCommentId === id && "bg-gray-900"
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
                <span className="text-blue-700">
                  <ChatBubbleOutlineOutlinedIcon style={{ height: 17 }} />
                </span>
                {replies.length}
              </div>
            </div>

            <Reply me={me} replies={replies} postId={postId} commentId={id} />
          </div>
        );
      })}
    </>
  );
};
