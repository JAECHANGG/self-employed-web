"use client";

import { useAddCollectionMutation } from "@/query/user-query";
import { PostByIdDto } from "@/types/post/dto";
import { convertPostByIdDtoToPostByCategoryDto } from "@/util/converter/post-converter";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface Props {
  post: PostByIdDto;
  userId: string;
}

export default function AddCollection({ post, userId }: Props) {
  const addCollection = useAddCollectionMutation();

  const handleClickPostCollectionButton = () => {
    addCollection.mutate({
      post: convertPostByIdDtoToPostByCategoryDto(post),
      userId,
    });
  };

  return (
    <span
      onClick={handleClickPostCollectionButton}
      className="flex items-center justify-center text-sm"
    >
      <BookmarkBorderIcon style={{ height: 20 }} />
    </span>
  );
}
