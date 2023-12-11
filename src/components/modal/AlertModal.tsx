import React, { FormEvent } from "react";
import ModalContainer from "../Modal";

interface Props {
  onClick: (e: FormEvent<HTMLFormElement>) => void | (() => void);
  onClose: () => void;
}

export default function AlertModal({ onClick, onClose }: Props) {
  return (
    <form onSubmit={onClick}>
      <button onClick={onClose}>취소</button>
      <button type="submit">확인</button>
    </form>
  );
}
