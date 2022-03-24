import React, { useState } from "react";
import { LayoutTypes, ListItemTypes } from './types';
import { Sidebar } from './components';
import { ActivityIcon, AnalyticIcon, CheckMarkIcon, ScheduleIcon, UsersIcon } from '../../assets';


export const Layout = (props: LayoutTypes): JSX.Element => {
  const [showSubLinks, setShowSubLinks] = useState<boolean>(true)

  const sidebarData: ListItemTypes[] = [
    {
      icon: UsersIcon,
      title: "Admin",
    },
    {
      icon: CheckMarkIcon,
      title: "Knowledge Base",
    },
    {
      icon: CheckMarkIcon,
      title: "Train SAM",
    },
    {
      icon: ScheduleIcon,
      title: "Agent Inbox",
    },
    {
      icon: ActivityIcon,
      title: "Help Center",
    },
    {
      icon: AnalyticIcon,
      title: "Analytics",
      active: showSubLinks,
      onClick: () => setShowSubLinks(!showSubLinks),
      subLinks: [
        {
          title: "Teams",
          active: true
        },
        {
          title: "Knowledge Base",
        },
        {
          title: "Training SAM",
        },
        {
          title: "Help Center",
        },
      ],
    },
  ];

  return (
    <div className="flex overflow-hidden h-screen">
      <div className="w-72 border-r">
        <Sidebar {...{ navbarData: sidebarData }} />
      </div>
      <div className="flex-1 bg-white w-cal-288">
        <div className="border-b"></div>
        <div className="px-10 pt-5">{props.children}</div>
      </div>
    </div>
  );
}