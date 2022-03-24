import React from "react";
import { SearchBarType } from '../types';


export const SearchBar = (props: SearchBarType):JSX.Element => {
  return (
    <div className="relative w-40 rounded-[10px]">
      <input placeholder={props.placeholder} {...props} />
    </div>
  )
}