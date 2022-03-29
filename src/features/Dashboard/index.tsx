import React, { useState } from "react";
import { DashboardTypes } from './types';
import { SubHeader } from './layouts';
import { TabType } from "../../common/Tabs/types";
import { Efficiency, Backlog, CustomerSatisfactory, Volume } from './pages';


export const Dashboard = (props: DashboardTypes): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs: TabType[] = [
    {
      id: 1,
      title: "Efficiency",
      active: activeTab?.title === "Efficiency",
      onClick: (item) => setActiveTab(item),
    },
    {
      id: 2,
      title: "Volume",
      active: activeTab?.title === "Volume",
      onClick: (item) => setActiveTab(item),
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      active: activeTab?.title === "Customer Satisfaction",
      onClick: (item) => setActiveTab(item),
    },
    {
      id: 4,
      title: "Backlog",
      active: activeTab?.title === "Backlog",
      onClick: (item) => setActiveTab(item),
    },
  ];



  return (
    <>
      <SubHeader {...{ tabs }} />
      {activeTab === tabs[0].id && <Efficiency />}
      {activeTab === tabs[1].id && <Volume />}
      {activeTab === tabs[2].id && <CustomerSatisfactory />}
      {activeTab === tabs[3].id && <Backlog />}
    </>
  );
}