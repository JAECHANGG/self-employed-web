import { fullSearchDialogAtom } from "@/atoms/full-dialog-atom";
import { ReactNode, useCallback } from "react";
import { useRecoilState } from "recoil";

interface OpenFullSearchDialog {
  title: string;
  children: ReactNode;
}

export const useFullSearchDialog = () => {
  const [fullSearchDialogState, setFullSearchDialogState] =
    useRecoilState(fullSearchDialogAtom);

  const closeFullSearchDialog = useCallback(
    () => setFullSearchDialogState((prev) => ({ ...prev, isOpen: false })),
    []
  );

  const openFullSearchDialog = useCallback(() => {
    setFullSearchDialogState({
      isOpen: true,
    });
  }, []);

  console.log(fullSearchDialogState);

  return {
    fullSearchDialogState,
    closeFullSearchDialog,
    openFullSearchDialog,
  };
};
