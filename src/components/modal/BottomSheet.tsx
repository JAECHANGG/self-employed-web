import React from "react";
import ModalPortal from "../ModalPortal";
import { useBottomSheet } from "@/hooks/useBottomSheet";

interface boardComponent {
  id: string;
  icon: React.ReactNode;
}

export default function BottomSheet() {
  const { bottomSheetState, closeBottomSheet } = useBottomSheet();

  return (
    <>
      {bottomSheetState.isOpen && (
        <ModalPortal>
          <section className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-neutral-800/70 z-50">
            <div
              className={`absolute bottom-0 h-auto w-full p-4 bg-white border-t border-slate-300 rounded-tl-2xl rounded-tr-2xl overflow-hidden
      transition-transform duration-300 ease-in-out transform ${
        bottomSheetState.isOpen ? "translate-y-0" : "translate-x-0"
      }`}
            >
              <h1 className="text-2xl font-bold mb-2">
                {bottomSheetState.title}
                <span onClick={closeBottomSheet}>-X</span>
              </h1>
              {/* <ul>
                {Object.keys(contents).map((content) => (
                  <li key={content} className="text-lg py-1 cursor-pointer">
                    {content}
                  </li>
                ))}
              </ul> */}
              {bottomSheetState.children}
            </div>
          </section>
        </ModalPortal>
      )}
    </>
  );
}
