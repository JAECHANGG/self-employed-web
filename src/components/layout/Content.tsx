"use client";

import { ReactNode } from "react";
import Modal from "../Modal";
import BottomSheet from "../modal/BottomSheet";
import FullSearchDialog from "../full-dialog/FullSearchDialog";

interface Props {
  children: ReactNode;
}

export const Content = ({ children }: Props) => {
  return (
    <>
      <main className="h-[90vh] relative overflow-y-auto">{children}</main>
      <Modal />
      <BottomSheet />
      <FullSearchDialog />
    </>
  );
};
