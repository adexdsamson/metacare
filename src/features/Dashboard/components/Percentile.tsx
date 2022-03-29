import { Typography } from "../../../common";
import { PercentileTypes } from "../types";

export const Percentile = (props: PercentileTypes): JSX.Element => {
  return (
    <div className={`h-full px-[12px] py-[4px] flex items-center justify-center ml-4 ${props.color} rounded-[4px]`}>
      <Typography
        {...{
          variant: "h6",
          family: "inter",
          classNames: "font-semibold text-[#25BB87]",
          size: "subcaption",
          lineHeight: "20",
        }}
      >
        {props.percent}
      </Typography>
    </div>
  );
};
