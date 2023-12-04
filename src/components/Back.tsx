"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { usePathname, useRouter } from "next/navigation";

const invisibleBackButtonPath = [
  "/home",
  "/boards",
  "/notifications",
  "/mypage",
  "/settings",
  "/",
];

export const Back = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <>
      {!invisibleBackButtonPath.includes(currentPath) && (
        <ArrowBackIosNewIcon onClick={handleClickBackButton} />
      )}
    </>
  );
};
