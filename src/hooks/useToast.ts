import { toastAtom } from "@/atoms/toast-atom";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

interface OpenToastType {
  message: string;
}

export const useToast = () => {
  const [toastState, setToastState] = useRecoilState(toastAtom);

  const closeToast = useCallback(
    () => setToastState((prev) => ({ ...prev, isOpen: false })),
    []
  );

  const openToast = useCallback(({ message }: OpenToastType) => {
    setToastState({
      isOpen: true,
      message,
    });
    const timeout = setTimeout(() => {
      closeToast();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return {
    toastState,
    openToast,
  };
};
