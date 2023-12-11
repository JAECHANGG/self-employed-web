import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Link from "next/link";

interface Props {
  category: string;
}

export const AddPostFloatingButton: React.FC<Props> = ({ category }) => {
  return (
    <Link
      href={`/boards/write/${category}`}
      className="fixed bottom-12 right-4 "
    >
      <AddCircleOutlinedIcon
        style={{ height: "13vw", width: "13vw", color: "black" }}
      />
    </Link>
  );
};
