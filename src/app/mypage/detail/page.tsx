"use client";

import Modal from "@/components/Modal";
import ModalPortal from "@/components/ModalPortal";
import { useGetMeQuery } from "@/query/me-query";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function DetailPage() {
  const { data, isLoading } = useGetMeQuery();

  const [error, setError] = useState<string>();
  const [openModal, setOpenModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (!e.target.files[0]) {
        setUploadedImage((prev) => prev);
        return;
      }
      const file = e.target.files[0];
      setUploadedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const onChangeNicknameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    if (uploadedImage) {
      formData.append("file", uploadedImage);
    }
    formData.append("text", nickname);

    console.log(formData);

    fetch("/api/me", { method: "PUT", body: formData })
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
      })
      .catch((e) => setError(e.toString()))
      .finally(() => setOpenModal(false));
  };

  useEffect(() => {
    if (!nickname) {
      setNickname(data?.username);
    }
    if (!uploadedImage) {
      setImageSrc(data?.image);
    }
  }, [data]);

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <form>
        <img
          className="rounded-full w-24 h-24"
          src={imageSrc || data?.image}
          alt="profile_image"
        />
        <input type="file" onChange={onChangeImageHandler} />
        <input
          type="text"
          value={nickname || ""}
          onChange={onChangeNicknameHandler}
        />
        <button type="button" onClick={() => setOpenModal(true)}>
          변경
        </button>
      </form>
      <div>{data?.email}</div>
      {openModal && (
        <ModalPortal>
          <Modal
            onClick={onSubmitHandler}
            onClose={() => setOpenModal(false)}
          />
        </ModalPortal>
      )}
    </div>
  );
}
