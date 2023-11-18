import { postApi } from "@/api/post/post-api";
import { queryClient } from "@/app/provider";
import {
  CreateCommentPayload,
  CreatePostPayload,
  DeleteCommentPayload,
  LikeCommentPayload,
  LikePostPayload,
  UnlikeCommentPayload,
  UnlikePostPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
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
}

export const useGetPostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [PostQueryKey.GetPostsById],
    queryFn: () => postApi.getPostById(id),
    staleTime: 0,
  });
};

export const useGetPostsByCategoryQuery = (category: string) => {
  return useQuery({
    queryKey: [PostQueryKey.GetPostsByCategory],
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
      queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
      console.log("create comment", response);
    },
  });
};

export const useDeletePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.Delete],
    mutationFn: (id: string) => postApi.delete(id),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsByCategory]);
      console.log("게시물 삭제", response);
    },
  });
};

export const useLikePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.LikePost],
    mutationFn: (payload: LikePostPayload) => postApi.likePost(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
      console.log("success", response);
    },
  });
};

export const useUnlikePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.UnlikePost],
    mutationFn: (payload: UnlikePostPayload) => postApi.unlikePost(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
      console.log("success", response);
    },
  });
};

export const useLikeCommentMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.LikeComment],
    mutationFn: (payload: LikeCommentPayload) => postApi.likeComment(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
      console.log("success", response);
    },
  });
};

export const useUnlikeCommentMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.UnlikeComment],
    mutationFn: (payload: UnlikeCommentPayload) =>
      postApi.unlikeComment(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
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
      queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
      console.log("댓글 삭제", response);
    },
  });
};

// export const useIncreaseViewMutation = () => {
//   return useMutation({
//     mutationKey: [PostQueryKey.IncreaseView],
//     mutationFn: (payload: IncreaseViewPayload) =>
//       postApi.increaseView(payload),
//     onSuccess: (response) => {
//       queryClient.invalidateQueries([PostQueryKey.GetPostsById]);
//       console.log("success", response);
//     },
//   });
// };
