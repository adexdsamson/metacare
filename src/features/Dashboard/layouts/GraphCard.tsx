import { GraphCardTypes, GraphCardHeaderTypes } from "../types";
import { Date, Typography } from '../../../common';
import { Percentile, Priority } from '../components';
import { ScheduleIcon } from "../../../assets";

export const GraphCard = (props: GraphCardTypes): JSX.Element => {
  return (
    <div className="w-full lg:h-[300px] md:flex border border-[#ECEBF5] rounded-[10px] my-5 ">
      <div className="flex-1 px-5 mb-5 lg:mb-0 relative">
        {props.mainContainer}
      </div>
      <div className="lg:w-60 w-full pb-4 lg:pb-0 border-l flex flex-col gap-6 items-center px-5 justify-center ">
        {props.sideContainer}
      </div>
    </div>
  );
};


export const GraphCardHeader = (props: GraphCardHeaderTypes): JSX.Element => {
  return (
    <div className="lg:flex justify-between items-center w-full my-4 relative z-20">
      <div className="flex mb-3 justify-between lg:justify-start">
        <Typography
          {...{
            variant: "h3",
            family: "gelion-semibold",
            size: "body",
            classNames: "leading-[26px] font-semibold",
            color: "deep-default",
          }}
        >
          {props.title}
        </Typography>
        <Percentile {...{ percent: "+4.14%", color: "bg-[#25BB87]/10" }} />
      </div>
      <div className="flex items-center gap-3">
        <Priority {...{ color: "bg-[#F05D23]", label: "High Priority" }} />
        <Date
          {...{
            selected: props.startDate,
            containerClassName: "border border-[#E1E1EB] h-10 rounded-lg",
            placeholderText: "This month",
            className:
              "h-10 lg:w-40 w-full ring-1 ring-[#E1E1EB] outline-0 placeholder:font-gelion-regular placeholder:text-caption placeholder:leading-22 placeholder:text-deep-default pl-4 rounded-lg",
            wrapperClassName: "h-full w-full rounded-lg",
            onChange: (date) => props.setStartDate(date),
            endAdornment: <img src={ScheduleIcon} alt="" />,
            endAdornmentClassName: "top-2 cursor-default",
          }}
        />
      </div>
    </div>
  );
};