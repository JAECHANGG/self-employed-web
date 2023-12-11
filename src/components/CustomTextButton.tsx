interface Props {
  onClick?: () => void;
  title: string;
  size?: "Small" | "Medium" | "Large";
}

export default function CustomTextButton({
  onClick,
  title,
  size = "Medium",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-100 rounded-md ${
        size === "Small"
          ? "p-1 mr-1"
          : size === "Medium"
          ? "px-4 py-2 mr-2"
          : "px-6 py-4 mr-2"
      }`}
    >
      {title}
    </button>
  );
}
