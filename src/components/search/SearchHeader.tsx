import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";
import { FullDialogBack } from "../FullDialogBack";
import SearchBar from "./SearchBar";

export default function SearchHeader() {
  const { closeFullSearchDialog } = useFullSearchDialog();
  return (
    <header className="flex items-center w-full h-fit py-3 px-2 bg-black">
      <FullDialogBack onClick={closeFullSearchDialog} />
      <SearchBar />
    </header>
  );
}
