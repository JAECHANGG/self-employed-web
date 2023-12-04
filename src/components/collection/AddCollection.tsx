"use client";

import React, { FormEvent, useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useAddCollectionMutation } from "@/query/user-query";
import ModalPortal from "../ModalPortal";
import Modal from "../Modal";

interface Props {
  postId: string;
  userId: string;
}

export default function AddCollection({ postId, userId }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const addCollection = useAddCollectionMutation();

  const handleClickPostCollectionButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCollection.mutate({
      postId,
      userId,
    });
  };

  return (
    <span
      onClick={() => setOpenModal(true)}
      className="flex items-center justify-center text-sm text-gray-600"
    >
      <BookmarkBorderIcon style={{ height: 20 }} />
      {openModal && (
        <ModalPortal>
          <Modal
            onClick={handleClickPostCollectionButton}
            onClose={() => setOpenModal(false)}
          />
        </ModalPortal>
      )}
    </span>
  );
}
