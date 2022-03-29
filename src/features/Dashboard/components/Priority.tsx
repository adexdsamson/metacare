import { Typography } from "../../../common";
import { PriorityTypes } from "../types";

export const Priority = (props: PriorityTypes): JSX.Element => {
  return (
    <div className="flex items-center after:border-r after:h-6 after:border-[#E1E1EB] after:pr-2">
      <div className={`h-[10px] w-[10px] rounded-sm ${props.color} mr-2`}></div>
      <Typography
        {...{
          variant: "p",
          family: "gelion-medium",
          classNames: "font-medium",
          size: "caption",
          lineHeight: "22",
          color: "deep-default",
        }}
      >
        {props.label}
      </Typography>
    </div>
  );
};
