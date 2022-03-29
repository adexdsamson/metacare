import { SearchBarIcon } from "../../../assets";
import {
  Typography,
  Input,
  Select,
  Button,
  ReactECharts,
} from "../../../common";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { GraphCard, GraphCardHeader } from "../layouts";
import { TimeStamp } from "../components";
import { useState } from "react";
import { AnalyticsDataTypes } from "../types";
import { EChartsOption } from "echarts";

export const Efficiency = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const option: EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [12, 17, 1, 47, 17, 1, 41, 32],
        type: "line",
      },
    ],
  };

  const data = [
    {
      name: "Jan",
      uv: 13,
    },
    {
      name: "Feb",
      uv: 19,
    },
    {
      name: "Mar",
      uv: 48,
    },
    {
      name: "Apr",
      uv: 48,
    },
    {
      name: "May",
      uv: 10,
    },
    {
      name: "Jun",
      uv: 18,
    },
    {
      name: "Jul",
      uv: 21,
    },
    {
      name: "Aug",
      uv: 33,
    },
  ];

  const analyticData: AnalyticsDataTypes[] = [
    {
      data,
      timeStamps: [
        { desc: "Average Response Time", time: "30 Mins" },
        { desc: "Response Time", time: "1 Hour 30 Mins" },
      ],
      title: "Average response Time",
      percent: "+4.14%",
      percentileColor: "bg-[#25BB87]/10",
      priorityColor: "bg-[#F05D23]",
      priorityLabel: "High Priority",
      setStartDate,
      startDate,
    },
    {
      data,
      timeStamps: [
        { desc: "Average Replies", time: "30 Mins" },
        { desc: "Response Time", time: "1 Hour 30 Mins" },
      ],
      title: "Replies per resolution",
      percent: "+4.14%",
      percentileColor: "bg-[#25BB87]/10",
      priorityColor: "bg-[#3E68FF]",
      priorityLabel: "High Priority",
      setStartDate,
      startDate,
    },
    {
      data,
      timeStamps: [
        { desc: "Average Resolution Rate", time: "30 Mins" },
        { desc: "Response Time", time: "1 Hour 30 Mins" },
      ],
      title: "Average resolution time",
      percent: "+4.14%",
      percentileColor: "bg-[#25BB87]/10",
      priorityColor: "bg-[#FB6491]",
      priorityLabel: "High Priority",
      setStartDate,
      startDate,
    },
    {
      data,
      timeStamps: [
        { desc: "Average Contact Rate", time: "30 Mins" },
        { desc: "Response Time", time: "1 Hour 30 Mins" },
      ],
      title: "First contact resolution rate",
      percent: "+4.14%",
      percentileColor: "bg-[#25BB87]/10",
      priorityColor: "bg-[#07C9E2]",
      priorityLabel: "High Priority",
      setStartDate,
      startDate,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="lg:px-10 px-5 h-24 md:flex justify-between items-center ">
        <Typography
          {...{
            variant: "h6",
            classNames: "font-semibold mb-5 lg:mb-0 shrink-0",
            size: "header",
            color: "deep-default",
            lineHeight: "38",
          }}
        >
          Efficiency Analytics
        </Typography>
        <div className="h-full md:flex w-full lg:w-fit items-center pb-4 lg:pb-0 gap-x-5">
          <Input
            {...{
              containerClassName: "lg:w-72 w-full mb-3 lg:mb-0 rounded-lg h-11",
              placeholder: "Search",
              startAdornment: (
                <img src={SearchBarIcon} alt="" className="h-full w-full" />
              ),
              className:
                "h-full w-full rounded-lg ring-1 outline-0 pl-12 ring-[#E1E1EB] placeholder:text-[#A3A3C2] placeholder:font-gelion-regular placeholder:text-subbody",
            }}
          />
          <div className="flex w-full lg:w-fit">
            <Select
              {...{
                containerClassName:
                  "lg:w-36 w-full h-11 after:border-r after:h-20 after:pr-2.5 pr-3 mr-3",
                className:
                  "h-full w-full ring-1 outline-0 ring-[#E1E1EB] rounded-lg px-3 appearance-none font-gelion-regular",
                endAdornment: <ChevronDownIcon />,
                endAdornmentClassName: "right-5",
              }}
            >
              <option className="text-deep-default leading-24 text-subbody font-gelion-regular">
                Filter Options
              </option>
            </Select>

            <Button>Export</Button>
          </div>
        </div>
      </div>

      <div className="lg:px-10 px-5 mt-20 lg:mt-0 lg:mt-0 h-full overflow-auto lg:pb-60 pb-80">
        {analyticData.map((item, index) => (
          <GraphCard
            {...{
              key: index,
              mainContainer: (
                <>
                  <GraphCardHeader
                    {...{
                      startDate: item.startDate,
                      percent: item.percent,
                      priorityColor: item.priorityColor,
                      title: item.title,
                      priorityLabel: item.priorityLabel,
                      percentileColor: item.percentileColor,
                      setStartDate: item.setStartDate,
                    }}
                  />

                  <ReactECharts
                    {...{
                      option,
                      style: {
                        height: "100%",
                        position: "absolute",
                        zIndex: "1",
                        top: 20,
                        left: -20,
                        right: -10,
                      },
                    }}
                  />
                </>
              ),
              sideContainer: (
                <>
                  {item.timeStamps.map((item, index) => (
                    <TimeStamp
                      {...{ desc: item.desc, time: item.time, key: index }}
                    />
                  ))}
                </>
              ),
            }}
          />
        ))}
      </div>
    </div>
  );
};
