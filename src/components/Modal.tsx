"use client";

import { useModal } from "@/hooks/useModal";
import ModalPortal from "./ModalPortal";

export default function Modal() {
  const { modalState, closeModal } = useModal();

  return (
    <>
      {modalState.isOpen ? (
        <ModalPortal>
          <section
            className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-neutral-800/70 z-50"
            onClick={closeModal}
          >
            <div className="w-[75%] bg-white p-6 rounded-lg z-50">
              <div className="mb-6">{modalState.message}</div>
              <div className="flex justify-end">
                <button
                  className="text-sm font-semibold"
                  onClick={modalState.onClick}
                >
                  확인
                </button>
                <button
                  className="ml-4 text-gray-700 text-sm"
                  onClick={closeModal}
                >
                  취소
                </button>
              </div>
            </div>
          </section>
        </ModalPortal>
      ) : null}
    </>
  );
}
