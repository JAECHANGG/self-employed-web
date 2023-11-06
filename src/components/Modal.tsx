import React, { FormEvent } from "react";

interface Props {
  onClose: () => void;
  onClick: (e: FormEvent<HTMLFormElement>) => void | (() => void);
}

export default function Modal({ onClose, onClick }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-neutral-800/70 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <form onSubmit={onClick}>
        <button onClick={onClose}>취소</button>
        <button type="submit">확인</button>
      </form>
    </section>
  );
}
