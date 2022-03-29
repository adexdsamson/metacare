import React from 'react';
import { Typography } from '../Typography';
import { TabsTypes } from './types';



export const Tabs = (props: TabsTypes):JSX.Element => {
  return (
    <div className="flex items-center md:pl-10 ml-5 mb-3 lg:mb-0 overflow-auto">
      {props.data.map((item, index) => (
        <Typography
          {...{
            key: index,
            variant: "h6",
            family: "gelion-regular",
            size: "subbody",
            lineHeight: "24",
            color: item.active ? "deep-default" : "default",
            classNames: item.active
              ? "border-b-2 py-3 border-active w-fit mr-10 cursor-pointer shrink-0"
              : "py-3 w-fit mr-10 cursor-pointer shrink-0",
            onClick: () => item.onClick(item.id),
          }}
        >
          {item.title}
        </Typography>
      ))}
    </div>
  );
}
