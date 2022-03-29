import { Typography } from "../../../common";
import { TimeStampTypes } from "../types";

export const TimeStamp = (props: TimeStampTypes): JSX.Element => {
  return (
    <div className="w-full h-28 rounded-[10px] bg-[#ECEBF5] border-2 border-[#ECEBF5] flex items-center pl-4">
      <div>
        <Typography
          {...{
            variant: "p",
            family: "gelion-regular",
            size: "subcaption",
            lineHeight: "22",
            color: "default",
          }}
        >
          {props.desc}
        </Typography>
        <Typography
          {...{
            variant: "h3",
            family: "gelion-semibold",
            size: "subheader",
            color: "deep-default",
            classNames: "leading-[32px] font-semibold",
          }}
        >
          {props.time}
        </Typography>
      </div>
    </div>
  );
};
