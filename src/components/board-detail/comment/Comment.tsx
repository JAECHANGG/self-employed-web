import { LikeComment } from "@/components/like/comment/LikeComment";
import { UnlikeComment } from "@/components/unlike/comment/UnlikeComment";
import { CommentDto } from "@/types/post/dto";
import { UserDto } from "@/types/user/dto";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CommentHeader from "./CommentHeader";

interface Props {
  me: UserDto;
  comments: CommentDto[];
  postId: string;
}

export const Comment = ({ me, comments, postId }: Props) => {
  return (
    <>
      {comments.map(({ user, comment, like, createdAt, id }) => {
        const isLike = like.map((likeUser) => likeUser.id).includes(me.id);

        return (
          <div className="flex flex-col" key={createdAt}>
            <CommentHeader
              user={user}
              createdAt={createdAt}
              me={me.id}
              commentId={id}
              postId={postId}
            />
            <div className="mb-2">{comment}</div>
            <div className="flex">
              {isLike ? (
                <UnlikeComment
                  postId={postId}
                  commentId={id}
                  userId={me.id}
                  likeNumber={like.length}
                />
              ) : (
                <LikeComment
                  postId={postId}
                  commentId={id}
                  userId={me.id}
                  likeNumber={like.length}
                />
              )}
              {/* <span className="mr-2 text-red-600">
                <FavoriteBorderIcon style={{ height: 17 }} /> {like.length}
              </span> */}
              <span className="text-blue-700">
                <ChatBubbleOutlineIcon style={{ height: 17 }} /> 0
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
