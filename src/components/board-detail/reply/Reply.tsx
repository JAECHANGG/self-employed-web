import { LikeReply } from "@/components/like/reply/LikeReply";
import { UnlikeReply } from "@/components/unlike/reply/UnlikeReply";
import { ReplyDto } from "@/types/post/dto";
import { UserDto } from "@/types/user/dto";
import ReplyHeader from "./ReplyHeader";

interface Props {
  me: UserDto;
  replies: ReplyDto[];
  postId: string;
  commentId: string;
}

export const Reply = ({ me, replies, postId, commentId }: Props) => {
  return (
    <>
      {replies.map(({ user, reply, like, createdAt, id }) => {
        const isLike = like.map((likeUser) => likeUser.id).includes(me.id);

        return (
          <div className={`flex flex-col ml-10`} key={id}>
            <ReplyHeader
              user={user}
              createdAt={createdAt}
              me={me.id}
              commentId={commentId}
              postId={postId}
              replyId={id}
              reply={reply}
            />
            <div className="mb-1">{reply}</div>
            <div className="flex">
              {isLike ? (
                <UnlikeReply
                  postId={postId}
                  commentId={commentId}
                  replyId={id}
                  user={me}
                  likeNumber={like.length}
                />
              ) : (
                <LikeReply
                  postId={postId}
                  commentId={commentId}
                  replyId={id}
                  user={me}
                  likeNumber={like.length}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
