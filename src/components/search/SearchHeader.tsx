import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";
import { FullDialogBack } from "../FullDialogBack";
import SearchBar from "./SearchBar";

export default function SearchHeader() {
  const { closeFullSearchDialog } = useFullSearchDialog();
  return (
    <header className="flex items-center w-full h-[5vh] px-2 py-4 bg-white">
      <FullDialogBack onClick={closeFullSearchDialog} />
      <SearchBar />
    </header>
  );
}
