"use client";

import React, { FormEvent, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDeleteCollectionMutation } from "@/query/user-query";
import ModalPortal from "../ModalPortal";
import Modal from "../Modal";

interface Props {
  postId: string;
  userId: string;
}

export default function DeleteCollection({ postId, userId }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const deleteCollection = useDeleteCollectionMutation();

  const handleClickDeleteCollectionButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteCollection.mutate({
      postId,
      userId,
    });
  };

  return (
    <span
      onClick={() => setOpenModal(true)}
      className="flex items-center justify-center text-sm text-gray-600"
    >
      <BookmarkIcon style={{ height: 20 }} />
      {openModal && (
        <ModalPortal>
          <Modal
            onClick={handleClickDeleteCollectionButton}
            onClose={() => setOpenModal(false)}
          />
        </ModalPortal>
      )}
    </span>
  );
}
