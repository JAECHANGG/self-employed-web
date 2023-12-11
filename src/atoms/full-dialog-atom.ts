import { atom } from "recoil";

interface FullSearchDialog {
  isOpen: boolean;
}

export const fullSearchDialogAtom = atom<FullSearchDialog>({
  key: "fullSearchDialogAtom",
  default: {
    isOpen: false,
  },
});
