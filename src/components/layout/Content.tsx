"use client";

import { ReactNode } from "react";
import Modal from "../Modal";
import Toast from "../Toast";
import FullSearchDialog from "../full-dialog/FullSearchDialog";
import BottomSheet from "../modal/BottomSheet";

interface Props {
  children: ReactNode;
}

export const Content = ({ children }: Props) => {
  return (
    <>
      <main className="h-full relative overflow-y-auto">{children}</main>
      <Modal />
      <BottomSheet />
      <FullSearchDialog />
      <Toast />
    </>
  );
};
