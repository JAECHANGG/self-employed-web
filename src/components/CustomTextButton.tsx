import { useRef } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const CustomTextButton = ({ text, disabled, onClick }: Props) => {
  const hoverRef = useRef(null);
  // const isHover = useHover(hoverRef);

  return (
    <div
      className={`flex justify-center items-center p-2 cursor-pointer text-white ${
        disabled ? "bg-gray-300" : "bg-[#363636]"
      } rounded-md w-full`}
      onClick={disabled ? undefined : onClick}
      ref={hoverRef}
    >
      {text}
    </div>
  );
};

// interface Props {
//   onClick?: () => void;
//   title: string;
//   size?: "Small" | "Medium" | "Large";
// }

// export default function CustomTextButton({
//   onClick,
//   title,
//   size = "Medium",
// }: Props) {
//   return (
//     <button
//       onClick={onClick}
//       className={`bg-gray-100 rounded-md ${
//         size === "Small"
//           ? "p-1 mr-1"
//           : size === "Medium"
//           ? "px-4 py-2 mr-2"
//           : "px-6 py-4 mr-2"
//       }`}
//     >
//       {title}
//     </button>
//   );
// }
