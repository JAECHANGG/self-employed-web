import Link from "next/link";

interface Props {
  category: string;
}

export const AddPostFloatingButton: React.FC<Props> = ({ category }) => {
  return (
    <Link
      href={`/boards/write/${category}`}
      className="fixed bottom-20 right-4 rounded-full bg-black ring-2 ring-white"
    >
      <div className="relative w-12 h-12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-0.5 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-7 bg-white"></div>
      </div>
    </Link>
  );
};
