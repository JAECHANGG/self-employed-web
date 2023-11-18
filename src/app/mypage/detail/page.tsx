"use client";

import Modal from "@/components/Modal";
import ModalPortal from "@/components/ModalPortal";
import { useGetUserQuery, useUpdateUserMutation } from "@/query/user-query";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function DetailPage() {
  const { data, isLoading } = useGetUserQuery();
  const updateUserMutation = useUpdateUserMutation();

  const [error, setError] = useState<string>();
  const [openModal, setOpenModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [username, setUsername] = useState("");
  // const [uploadedImage, setUploadedImage] = useState<File>();

  // const onChangeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files !== null) {
  //     if (!e.target.files[0]) {
  //       setUploadedImage((prev) => prev);
  //       return;
  //     }
  //     const file = e.target.files[0];
  //     setUploadedImage(file);
  //     const imageUrl = URL.createObjectURL(file);
  //     setImageSrc(imageUrl);
  //   }
  // };

  const onChangeUsernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUserMutation.mutate(
      { username },
      {
        onError: (error) => {
          console.log("error", error);
        },
        onSuccess: () => {
          setOpenModal(false);
        },
      }
    );

    // const formData = new FormData();
    // if (uploadedImage) {
    //   formData.append("file", uploadedImage);
    // }
    // formData.append("text", username);
    // fetch("/api/me", { method: "PUT", body: { username } })
    //   .then((res) => {
    //     if (!res.ok) {
    //       setError(`${res.status} ${res.statusText}`);
    //       return;
    //     }
    //   })
    //   .catch((e) => setError(e.toString()))
    //   .finally(() => setOpenModal(false));
  };

  useEffect(() => {
    if (!username) {
      setUsername(data?.username || "");
    }
    // if (!uploadedImage) {
    //   setImageSrc(data?.image);
    // }
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
        {/* <input type="file" onChange={onChangeImageHandler} /> */}
        <input
          type="text"
          value={username || ""}
          onChange={onChangeUsernameHandler}
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
