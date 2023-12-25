import { atom } from "recoil";

interface GlobalToast {
  isOpen: boolean;
  message: string;
}

export const toastAtom = atom<GlobalToast>({
  key: "toastAtom",
  default: {
    isOpen: false,
    message: "",
  },
});
