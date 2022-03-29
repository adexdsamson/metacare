import { HeaderTypes } from "../types";
import { SearchBar } from "./SearchBar";
import { ActionPanel } from "./ActionPanel";
import { MenuIcon } from "@heroicons/react/solid";
import { useMediaQuery } from "../../../hookss/useMediaQuery";

export const Header = (props: HeaderTypes): JSX.Element => {
  const isMobileView = useMediaQuery("(max-width: 640px)");

  return (
    <header className="w-full h-full py-2 lg:px-10 px-5 flex items-center justify-between">
      <MenuIcon {...{ className: "h-10 w-10 mr-3 lg:hidden", onClick: props.onClick }} />
      <SearchBar {...{ placeholder: "Ask us any question" }} />
      <ActionPanel {...{ show: !isMobileView }} />
    </header>
  );
};
