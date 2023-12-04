import { postApi } from "@/api/post/post-api";
import { queryClient } from "@/app/provider";
import { CommentDto, PostByIdDto } from "@/types/post/dto";
import {
  CreateCommentPayload,
  CreatePostPayload,
  CreateReplyPayload,
  DeleteCommentPayload,
  DeleteReplyPayload,
  IncreaseViewPayload,
  LikeCommentPayload,
  LikePostPayload,
  LikeReplyPayload,
  UnlikeCommentPayload,
  UnlikePostPayload,
  UnlikeReplyPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import { UserDto } from "@/types/user/dto";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetAllPosts = "GetAllPosts",
  GetPostsById = "GetPostsById",
  GetPostsByCategory = "GetPostsByCategory",
  Create = "CreatePost",
  Update = "UpdatePost",
  Delete = "DeletePost",
  CreateComment = "CreateComment",
  DeleteComment = "DeleteComment",
  LikePost = "LikePost",
  UnlikePost = "UnlikePost",
  LikeComment = "LikeComment",
  UnlikeComment = "UnlikeComment",
  IncreaseView = "IncreaseView",
  CreateReply = "CreateReply",
  DeleteReply = "DeleteReply",
  LikeReply = "LikeReply",
  UnlikeReply = "UnlikeReply",
}

export const useGetAllPostsQuery = () => {
  return useQuery({
    queryKey: [PostQueryKey.GetAllPosts],
    queryFn: () => postApi.getAllPosts(),
  });
};

export const useGetPostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [PostQueryKey.GetPostsById, id],
    queryFn: () => postApi.getPostById(id),
  });
};

export const useGetPostsByCategoryQuery = (category: string) => {
  return useQuery({
    queryKey: [PostQueryKey.GetPostsByCategory, category],
    queryFn: () => postApi.getPostsByCategory(category),
  });
};

export const useCreatePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.Create],
    mutationFn: (payload: CreatePostPayload) => postApi.create(payload),
    onSuccess: (response) => {
      console.log("success", response);
    },
  });
};

export const useUpdatePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.Update],
    mutationFn: (payload: UpdatePostPayload) => postApi.update(payload),
    onSuccess: (response) => {
      console.log("success", response);
    },
  });
};

export const useCreateCommentMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.CreateComment],
    mutationFn: (payload: CreateCommentPayload) =>
      postApi.createComment(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById, response.id]);
      console.log("create comment", response);
    },
  });
};

export const useDeletePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.Delete],
    mutationFn: (id: string) => postApi.delete(id),
    onSuccess: (response) => {
      console.log("게시물 삭제", response);
    },
  });
};

export const useLikePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.LikePost],
    mutationFn: (payload: LikePostPayload) => postApi.likePost(payload),
    onMutate: async (newPayload: LikePostPayload) => {
      const { postId } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      console.log("previousPayload", previousPayload);

      queryClient.setQueryData([PostQueryKey.GetPostsById, postId], {
        ...previousPayload,
        like: previousPayload ? [...previousPayload.like, newPayload.user] : [],
      });

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};

export const useUnlikePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.UnlikePost],
    mutationFn: (payload: UnlikePostPayload) => postApi.unlikePost(payload),
    onMutate: async (newPayload: LikePostPayload) => {
      const { postId } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      queryClient.setQueryData([PostQueryKey.GetPostsById, postId], {
        ...previousPayload,
        like: previousPayload?.like.filter(
          (user) => user.id !== newPayload.user.id
        ),
      });

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};

export const useLikeCommentMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.LikeComment],
    mutationFn: (payload: LikeCommentPayload) => postApi.likeComment(payload),
    onMutate: async (newPayload: LikeCommentPayload) => {
      const { postId } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      const newComment = previousPayload?.comments.map(
        (comment: CommentDto) => {
          if (comment.id === newPayload.commentId) {
            return { ...comment, like: [...comment.like, newPayload.user] };
          }
          return comment;
        }
      );

      const newData = {
        ...previousPayload,
        comments: newComment,
      };

      queryClient.setQueryData([PostQueryKey.GetPostsById, postId], newData);

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};

export const useUnlikeCommentMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.UnlikeComment],
    mutationFn: (payload: UnlikeCommentPayload) =>
      postApi.unlikeComment(payload),
    onMutate: async (newPayload: LikeCommentPayload) => {
      const { postId } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      const newComment = previousPayload?.comments.map(
        (comment: CommentDto) => {
          if (comment.id === newPayload.commentId) {
            return {
              ...comment,
              like: comment.like.filter(
                (user: UserDto) => user.id !== newPayload.user.id
              ),
            };
          }
          return comment;
        }
      );

      const newData = {
        ...previousPayload,
        comments: newComment,
      };

      queryClient.setQueryData([PostQueryKey.GetPostsById, postId], newData);

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};

export const useDeleteCommentMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.DeleteComment],
    mutationFn: (payload: DeleteCommentPayload) =>
      postApi.deleteComment(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById, response.id]);
      console.log("댓글 삭제", response);
    },
  });
};

export const useIncreaseViewMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.IncreaseView],
    mutationFn: (payload: IncreaseViewPayload) => postApi.increaseView(payload),
    onMutate: async (payload: IncreaseViewPayload) => {
      const { postId } = payload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      if (previousPayload) {
        queryClient.setQueryData([PostQueryKey.GetPostsById, postId], {
          ...previousPayload,
          view: previousPayload ? previousPayload.view + 1 : 0,
        });
      }

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
      console.log("error", err);
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};

export const useCreateReplyMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.CreateReply],
    mutationFn: (payload: CreateReplyPayload) => postApi.createReply(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById, response.id]);
      console.log("useCreateReplyMutation", response);
    },
  });
};

export const useDeleteReplyMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.DeleteReply],
    mutationFn: (payload: DeleteReplyPayload) => postApi.deleteReply(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById, response.id]);
      console.log("useDeleteReplyMutation", response);
    },
  });
};

export const useLikeReplyMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.LikeReply],
    mutationFn: (payload: LikeReplyPayload) => postApi.likeReply(payload),
    onMutate: async (newPayload: LikeReplyPayload) => {
      const { postId } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      const newComments = previousPayload?.comments.map(
        (comment: CommentDto) => {
          if (comment.id === newPayload.commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === newPayload.replyId) {
                  return { ...reply, like: [...reply.like, newPayload.user] };
                }
                return reply;
              }),
            };
          }
          return comment;
        }
      );

      const newData = {
        ...previousPayload,
        comments: newComments,
      };

      queryClient.setQueryData([PostQueryKey.GetPostsById, postId], newData);

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};

export const useUnlikeReplyMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.UnlikeReply],
    mutationFn: (payload: UnlikeReplyPayload) => postApi.unlikeReply(payload),
    onMutate: async (newPayload: UnlikeReplyPayload) => {
      const { postId } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [PostQueryKey.GetPostsById, postId],
      });

      const previousPayload: PostByIdDto | undefined = queryClient.getQueryData(
        [PostQueryKey.GetPostsById, postId]
      );

      const newComments = previousPayload?.comments.map(
        (comment: CommentDto) => {
          if (comment.id === newPayload.commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === newPayload.replyId) {
                  return {
                    ...reply,
                    like: reply.like.filter(
                      (user: UserDto) => user.id !== newPayload.user.id
                    ),
                  };
                }
                return reply;
              }),
            };
          }
          return comment;
        }
      );

      const newData = {
        ...previousPayload,
        comments: newComments,
      };

      queryClient.setQueryData([PostQueryKey.GetPostsById, postId], newData);

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [PostQueryKey.GetPostsById, newPayload.postId],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries({
        queryKey: [PostQueryKey.GetPostsById, response?.id],
      });
      console.log("success", response);
    },
  });
};
