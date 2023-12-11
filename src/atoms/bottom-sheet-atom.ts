import { ReactNode } from "react";
import { atom } from "recoil";

interface GlobalBottomSheet {
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

export const bottomSheetAtom = atom<GlobalBottomSheet>({
  key: "bottomSheetAtom",
  default: {
    isOpen: false,
    title: "",
    children: null,
  },
});
