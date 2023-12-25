import { Back } from "../Back";
import { SearchIconContainer } from "../search/SearchIconContainer";

export const Header = () => {
  return (
    <header className="h-fit py-3 border-b-[1px] border-gray-200 flex justify-around items-center relative">
      <div className="absolute left-2">
        <Back />
      </div>
      <span className="text-xl font-bold text-white">장사의 신</span>
      <SearchIconContainer />
    </header>
  );
};
