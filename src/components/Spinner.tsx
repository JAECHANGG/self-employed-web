import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  scroll?: boolean;
}

export const Spinner = ({ scroll = false }: Props) => {
  return (
    <div
      className={`flex justify-center items-center ${
        !scroll ? "absolute inset-0 bg-transparent" : "py-20"
      }`}
    >
      <CircularProgress size={!scroll ? 40 : 30} style={{ color: "white" }} />
    </div>
  );
};
