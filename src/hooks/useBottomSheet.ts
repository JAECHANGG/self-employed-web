import { bottomSheetAtom } from "@/atoms/bottom-sheet-atom";
import { ReactNode, useCallback } from "react";
import { useRecoilState } from "recoil";

interface OpenBottomSheet {
  title: string;
  children: ReactNode;
}

export const useBottomSheet = () => {
  const [bottomSheetState, setBottomSheetState] =
    useRecoilState(bottomSheetAtom);

  const closeBottomSheet = useCallback(
    () => setBottomSheetState((prev) => ({ ...prev, isOpen: false })),
    []
  );

  const openBottomSheet = useCallback(
    ({ title, children }: OpenBottomSheet) => {
      setBottomSheetState({
        isOpen: true,
        title,
        children,
      });
    },
    []
  );

  return {
    bottomSheetState,
    closeBottomSheet,
    openBottomSheet,
  };
};
