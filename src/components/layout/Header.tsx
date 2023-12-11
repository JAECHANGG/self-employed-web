import { Back } from "../Back";
import { SearchIconContainer } from "../search/SearchIconContainer";

export const Header = () => {
  return (
    <header className="h-[5vh] flex justify-around items-center relative">
      <div className="absolute left-2">
        <Back />
      </div>
      <span className="text-xl font-bold">장사의 신</span>
      <SearchIconContainer />
    </header>
  );
};
