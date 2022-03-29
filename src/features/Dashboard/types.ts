import { TabType } from "../../common/Tabs/types";

export interface DashboardTypes {}

type colorOptions = "bg-[#F05D23]" | "bg-[#3E68FF]" | "bg-[#FB6491]" | "bg-[#07C9E2]";
export interface SubHeaderTypes {
  tabs: TabType[]
}

export interface GraphCardTypes {
  mainContainer?: JSX.Element,
  sideContainer?: JSX.Element
}

export interface TimeStampTypes {
  time: string,
  desc: string,
}

export interface PercentileTypes {
  percent: string,
  color?: string
}

export interface PriorityTypes {
  label: string; 
  color: colorOptions;
}

export interface GraphCardHeaderTypes {
  title: string,
  percent: string,
  percentileColor: string,
  priorityLabel: string,
  priorityColor: colorOptions,
  startDate: Date | null,
  setStartDate: (date: Date | null) => void,

}

export interface AnalyticsDataTypes {
  startDate: Date | null;
  title: string;
  percent: string;
  percentileColor: string;
  priorityLabel: string;
  priorityColor: colorOptions;
  setStartDate: (date: Date | null) => void;
  data: any;
  timeStamps: { desc: string, time: string }[];
}