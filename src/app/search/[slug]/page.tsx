import { SearchAllController } from "@/components/search/SearchAllController";

interface Props {
  params: { slug: string };
}

export default function SearchAllPage({ params: { slug: keyword } }: Props) {
  return <SearchAllController keyword={decodeURIComponent(keyword)} />;
}
