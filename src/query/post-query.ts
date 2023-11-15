import { postApi } from "@/api/post/post-api";
import { CreatePostPayload, UpdatePostPayload } from "@/types/post/payload";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetPostsById = "GetPostsById",
  GetPostsByCategory = "GetPostsByCategory",
  Create = "CreatePost",
  Update = "UpdatePost",
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
