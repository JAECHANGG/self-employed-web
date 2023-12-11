import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";
import SearchHeader from "../search/SearchHeader";
import { SearchKeyword } from "../search/SearchKeyword";

export default function FullSearchDialog() {
  const { fullSearchDialogState } = useFullSearchDialog();

  return (
    <>
      {fullSearchDialogState.isOpen && (
        <section className="absolute top-0 left-0 flex flex-col w-full h-full bg-white z-300">
          <SearchHeader />
          <SearchKeyword />
        </section>
      )}
    </>
  );
}
