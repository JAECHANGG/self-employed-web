"use client";

import { useToast } from "@/hooks/useToast";
import { useEffect, useState } from "react";

export default function Toast() {
  const { toastState } = useToast();
  const [fade, setFade] = useState("animate-fade-in");

  useEffect(() => {
    if (toastState.isOpen) {
      setTimeout(() => {
        setFade("");
      }, 300);
      setTimeout(() => {
        setFade("animate-fade-out");
      }, 1700);
    }
  }, [toastState.isOpen]);

  return (
    <>
      {toastState.isOpen && (
        <section
          className={`fixed top-0 left-0 flex justify-center items-end w-full h-full bg-transparent z-50 ${fade}`}
        >
          <div className="w-fit bg-[#363636] py-2 px-5 mb-[30%] rounded-3xl">
            <div className=" text-white text-base">{toastState.message}</div>
          </div>
        </section>
      )}
    </>
  );
}
