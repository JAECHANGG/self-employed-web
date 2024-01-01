import { useFullSearchDialog } from "@/hooks/useFullSearchDialog";
import { useQueryClient } from "@tanstack/react-query";
import SearchHeader from "../search/SearchHeader";
import { SearchKeyword } from "../search/SearchKeyword";

export default function FullSearchDialog() {
  const queryClient = useQueryClient();
  const { fullSearchDialogState } = useFullSearchDialog();

  // useEffect(() => {
  //   if (fullSearchDialogState.isOpen) {
  //     queryClient.setQueryData([PostQueryKey.SearchPostsAll], []);
  //   }
  // }, [fullSearchDialogState.isOpen]);

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
