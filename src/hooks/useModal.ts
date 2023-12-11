import { modalAtom } from "@/atoms/modal-atom";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

interface OpenModalType {
  message: string;
  onClick: () => void;
}

export const useModal = () => {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  const closeModal = useCallback(
    () => setModalState((prev) => ({ ...prev, isOpen: false })),
    []
  );

  const openModal = useCallback(({ message, onClick }: OpenModalType) => {
    setModalState({
      isOpen: true,
      message,
      onClick,
    });
  }, []);

  return {
    modalState,
    closeModal,
    openModal,
  };
};
