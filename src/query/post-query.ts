import { postApi } from "@/api/post/post-api";
import { CreatePostPayload } from "@/types/post/payload";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetPostsById = "GetPostsById",
  GetPostsByCategory = "GetPostsByCategory",
  Create = "CreatePost",
}

export const useGetPostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [PostQueryKey.GetPostsById],
    queryFn: () => postApi.getPostById(id),
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
