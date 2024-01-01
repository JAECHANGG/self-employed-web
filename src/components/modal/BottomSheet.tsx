import { useBottomSheet } from "@/hooks/useBottomSheet";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Drawer } from "@mui/material";
import React from "react";

const drawerDirection = "bottom";

interface boardComponent {
  id: string;
  icon: React.ReactNode;
}

export default function BottomSheet() {
  const { bottomSheetState, closeBottomSheet } = useBottomSheet();

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {
        <section
          className={`${bottomSheetState.isOpen ? "visible" : "hidden"} `}
          onClick={closeBottomSheet}
        >
          <React.Fragment key={drawerDirection}>
            <Drawer
              anchor={drawerDirection}
              open={bottomSheetState.isOpen}
              onClose={closeBottomSheet}
              PaperProps={{
                style: {
                  background: "transparent",
                },
              }}
            >
              <div className="h-auto w-full py-4 bg-[#292929] border-t border-slate-800 rounded-tl-2xl rounded-tr-2xl overflow-hidden text-white">
                <div className="flex justify-center items-center mb-2">
                  <div className="h-1 w-10 bg-gray-500 rounded-lg" />
                </div>
                <div
                  className="flex justify-between items-center mb-2  px-4"
                  onClick={stopPropagation}
                >
                  <h1 className="flex justify-between text-xl font-medium">
                    {bottomSheetState.title}
                  </h1>
                  <CloseSharpIcon
                    className="w-8 h-8"
                    onClick={closeBottomSheet}
                  />
                </div>
                <div className="bg-gray-500 w-full h-[1px] opacity-30 mb-2" />
                <div className="px-4">{bottomSheetState.children}</div>
              </div>
            </Drawer>
          </React.Fragment>
        </section>
      }
    </>
  );
}
