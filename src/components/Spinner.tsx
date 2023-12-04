import CircularProgress from "@mui/material/CircularProgress";

export const Spinner = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black opacity-25">
      <CircularProgress style={{ color: "pink" }} />
    </div>
  );
};
