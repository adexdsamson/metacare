import React from "react";
import { Typography } from "../../Typography";
import { SidebarTypes, ListItemTypes } from "../types";
import { UserBadge } from "./UserBadge";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";

const ListItem = (props: ListItemTypes): JSX.Element => {
  return (
    <li onClick={props.onClick} className="w-full py-4">
      <div className="flex items-center gap-x-4">
        <div className="w-[24px] h-[24px] grid place-items-center">
          <img src={props.icon} alt="" />
        </div>
        <div className="flex items-center justify-between w-full pr-4">
          <Typography
            {...{
              variant: "p",
              size: "subbody",
              lineHeight: "24",
              family: "gelion",
              color: props.active ? "active" : "default",
            }}
          >
            {props.title}
          </Typography>

          {props.active ? (
            <ChevronDownIcon className="h-8 w-8 text-[#E5E4EF]" />
          ) : (
            <ChevronRightIcon className="h-8 w-8 text-[#E5E4EF]" />
          )}
        </div>
      </div>
      <ul className={`pl-4 ${props.active ? "" : "hidden"}`}>
        {props.subLinks?.map((item, index) => (
          <Typography
            {...{
              key: index,
              variant: "h5",
              color: item.active ? "deep-default" : "default",
              size: "subbody",
              lineHeight: "24",
              family: "gelion",
              classNames: item.active
                ? "before:border-l before:border-[#ECEBF5] before:pl-5 mt-2"
                : "before:pl-6 mt-3",
            }}
          >
            {item.title}
          </Typography>
        ))}
      </ul>
    </li>
  );
};

export const Sidebar = (props: SidebarTypes) => {
  return (
    <aside className="w-full pt-5 px-6 h-full">
      <UserBadge {...{ name: "Metacare", email: "adeyinka@metacare.app" }} />
      <nav className="mt-3">
        <ul>
          {props.navbarData.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
