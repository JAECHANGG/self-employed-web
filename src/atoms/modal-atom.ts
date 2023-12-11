import { atom } from "recoil";

interface GlobalModal {
  isOpen: boolean;
  message: string;
  onClick: () => void;
}

export const modalAtom = atom<GlobalModal>({
  key: "modalAtom",
  default: {
    isOpen: false,
    message: "",
    onClick: () => {},
  },
});
