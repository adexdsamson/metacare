import { ActionPanelTypes, BadgeTyprs } from "../types";
import { BellsIcon } from "../../../assets";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Typography } from "../../Typography";

const Badge = (props: BadgeTyprs): JSX.Element => {
  return (
    <div className="w-4 h-4 rounded bg-[#F25A68] grid place-items-center">
      <Typography
        {...{
          variant: "p",
          family: "gelion-regular",
          size: "subcaption",
          lineHeight: "20",
          color: 'white'
        }}
      >
        {props.number}
      </Typography>
    </div>
  );
};

export const ActionPanel = (props: ActionPanelTypes): JSX.Element => {
  return (
    <div className={`h-[90%] ${ props.show ? "flex" : "hidden"} items-center gap-x-3 px-3 border rounded-lg shadow-sm`}>
      <div className="flex items-center gap-x-2 pr-3 after:border after:h-6">
        <img src={BellsIcon} alt="" className="" />
        <Badge {...{ number: "3" }} />
      </div>
      <div className="flex items-center gap-x-3 cursor-pointer">
        <div className="w-8 h-8 rounded-full ring-2 ring-active"></div>
        <ChevronDownIcon className="h-5 w-5 text-[#696D8C]" />
      </div>
    </div>
  );
};
