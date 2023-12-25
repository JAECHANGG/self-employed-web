"use client";

import { useDeleteCollectionMutation } from "@/query/user-query";
import { PostByIdDto } from "@/types/post/dto";
import { convertPostByIdDtoToPostByCategoryDto } from "@/util/converter/post-converter";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface Props {
  post: PostByIdDto;
  userId: string;
}

export default function DeleteCollection({ post, userId }: Props) {
  const deleteCollection = useDeleteCollectionMutation();

  const handleClickDeleteCollectionButton = () => {
    deleteCollection.mutate({
      post: convertPostByIdDtoToPostByCategoryDto(post),
      userId,
    });
  };

  return (
    <span
      onClick={handleClickDeleteCollectionButton}
      className="flex items-center justify-center text-sm text-white"
    >
      <BookmarkIcon style={{ height: 20 }} />
    </span>
  );
}
