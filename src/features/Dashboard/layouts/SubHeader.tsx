import React from "react";
import { Tabs } from "../../../common";
import { SubHeaderTypes } from "../types";

export const SubHeader = (props: SubHeaderTypes): JSX.Element => {
  return (
    <div className="lg:border-b ">
      <Tabs {...{ data: props.tabs }} />
    </div>
  );
};
