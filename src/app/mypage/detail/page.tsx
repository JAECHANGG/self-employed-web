"use client";

import { useGetMeQuery } from "@/query/me-query";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function DetailPage() {
  const { data, isLoading } = useGetMeQuery();
  const [error, setError] = useState<string>();
  const [uploadedImage, setUploadedImage] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (!e.target.files[0]) {
        setUploadedImage((prev) => prev);
        return;
      }
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const onChangeNicknameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", uploadedImage);
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
      .finally();
  };

  useEffect(() => {
    if (!nickname) {
      setNickname(data?.data.username);
    }
    if (!uploadedImage) {
      setUploadedImage(data?.data.image);
    }
  }, [data]);

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Image
          className="rounded-full"
          src={uploadedImage || data?.data.image}
          alt="profile_image"
          width={300}
          height={300}
        />
        <input type="file" onChange={onChangeImageHandler} />
        <input
          type="text"
          value={nickname || ""}
          onChange={onChangeNicknameHandler}
        />
        <button>변경</button>
      </form>
      <div>{data?.data.email}</div>
    </div>
  );
}
