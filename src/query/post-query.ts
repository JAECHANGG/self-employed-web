import { postApi } from "@/api/post/post-api";
import { queryClient } from "@/app/provider";
import {
  CreateCommentPayload,
  CreatePostPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetPostsById = "GetPostsById",
  GetPostsByCategory = "GetPostsByCategory",
  Create = "CreatePost",
  Update = "UpdatePost",
  CreateComment = "CreateComment",
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
