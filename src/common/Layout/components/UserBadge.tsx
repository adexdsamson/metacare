import { UserBadgeTypes } from "../types";
import { Typography } from "../..";

export const UserBadge = (props: UserBadgeTypes): JSX.Element => {
  return (
    <div className="flex items-center w-full rounded-[8px] shadow-sm h-[60px] border">
      <div className="w-14"></div>
      <div className="flex-1">
        <Typography
          {...{
            variant: "h6",
            color: "deep-default",
            family: "gelion-regular",
            size: "caption",
          }}
        >
          <>{props.name}</>
        </Typography>
        <Typography
          {...{
            variant: "p",
            color: "default",
            family: "gelion-regular",
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
