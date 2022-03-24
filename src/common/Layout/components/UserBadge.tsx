import React from "react";
import { UserBadgeTypes } from "../types";
import { Typography } from "../..";

export const UserBadge = (props: UserBadgeTypes): JSX.Element => {
  return (
    <div className="flex items-center w-full rounded-[8px] shadow-sm p-4 border">
      <div className="w-10"></div>
      <div className="flex-1">
        <Typography
          {...{
            variant: "h6",
            color: "deep-default",
            family: "gelion",
            size: "caption",
          }}
        >
          <>{props.name}</>
        </Typography>
        <Typography
          {...{
            variant: "p",
            color: "default",
            family: "gelion",
            lineHeight: "20",
            size: "subcaption",
          }}
        >
          <> {props.email}</>
        </Typography>
      </div>
    </div>
  );
};