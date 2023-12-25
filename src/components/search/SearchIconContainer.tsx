"use client";

import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";
import SearchIcon from "@mui/icons-material/Search";

export const SearchIconContainer = () => {
  const { openFullSearchDialog } = useFullSearchDialog();

  return (
    <div className="absolute right-2 text-white" onClick={openFullSearchDialog}>
      <SearchIcon className="h-7 w-7" />
    </div>
  );
};
