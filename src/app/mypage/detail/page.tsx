"use client";

import { CustomTextButton } from "@/components/CustomTextButton";
import { Spinner } from "@/components/Spinner";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";
import { useGetUserQuery, useUpdateUserMutation } from "@/query/user-query";
import { ChangeEvent, useEffect, useState } from "react";

export default function DetailPage() {
  const { data, isLoading } = useGetUserQuery();
  const updateUserMutation = useUpdateUserMutation();
  const { openToast } = useToast();

  const [error, setError] = useState<string>();
  const [imageSrc, setImageSrc] = useState("");
  const [username, setUsername] = useState("");
  const { openModal } = useModal();
  const [isInputFocused, setIsInputFocused] = useState(false);
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

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) return;
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    updateUserMutation.mutate(
      { username },
      {
        onError: (error) => {
          openToast({ message: error?.response?.data.error });
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

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center p-10">
      <img
        className="rounded-full w-24 h-24"
        src={imageSrc || data?.image}
        alt="profile_image"
      />
      <div className="w-full mt-12 mb-4 text-white">{data?.email}</div>
      <div
        className={`w-full flex justify-between items-center border-b ${
          isInputFocused ? "border-white" : "border-gray-400"
        }  py-1 mb-8`}
      >
        <input
          className="w-[75%] focus:outline-none bg-black text-white"
          type="text"
          value={username || ""}
          onChange={handleChangeUsername}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className="text-sm">{username.length}/20</div>
      </div>
      <CustomTextButton
        text="확인"
        disabled={username === data?.username}
        onClick={() => {
          openModal({
            message: "정말로 변경하시겠습니까?",
            onClick: handleSubmit,
          });
        }}
      />
    </div>
  );
}
