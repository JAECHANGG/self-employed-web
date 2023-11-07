import { postApi } from "@/api/post/post-api";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetPostsByCategory = "GetPostsByCategory",
  Create = "CreatePost",
}

export const useGetPostsByCategoryQuery = (category: string) => {
  return useQuery({
    queryKey: [PostQueryKey.GetPostsByCategory],
    queryFn: () => postApi.getPostsByCategory(category),
  });
};

export const useCreatePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.Create],
    mutationFn: (payload: FormData) => postApi.create(payload),
    onSuccess: (response) => {
      console.log("success", response);
    },
  });
};
