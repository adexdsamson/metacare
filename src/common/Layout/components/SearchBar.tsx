import { SearchBarIcon } from "../../../assets";
import { SearchBarType } from "../types";

export const SearchBar = (props: SearchBarType): JSX.Element => {
  return (
    <div className="relative w-96 rounded-[10px] h-[90%]">
      <input
        placeholder={props.placeholder}
        className="h-full w-full bg-[#FAFAFC] rounded-[10px] ring-0 outline-0 pl-5 font-gelion text-subbody leading-29 placeholder:text-[#A3A3C2] placeholder:font-gelion-regular placeholder:text-subbody"
        {...props}
      />
      <div className="w-[21px] h-[21px] grid place-items-center absolute right-5 top-4 cursor-pointer">
        <img src={SearchBarIcon} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};
