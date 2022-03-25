import React from "react";
import { HeaderTypes } from "../types";
import { SearchBar } from "./SearchBar";
import { ActionPanel } from './ActionPanel';

export const Header = (props: HeaderTypes): JSX.Element => {
  return (
    <header className="w-full h-full py-2 px-10 flex items-center justify-between">
      <SearchBar {...{ placeholder: "Ask us any question" }} />
      <ActionPanel />
    </header>
  );
};
