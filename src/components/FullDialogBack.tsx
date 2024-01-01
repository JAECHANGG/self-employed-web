"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface Props {
  onClick: () => void;
}

export const FullDialogBack = ({ onClick }: Props) => {
  return (
    <section>
      <ArrowBackIosNewIcon className="text-white" onClick={onClick} />
    </section>
  );
};
