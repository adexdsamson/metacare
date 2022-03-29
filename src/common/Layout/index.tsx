import { useState, useEffect } from "react";
import { LayoutTypes, ListItemTypes } from "./types";
import { Sidebar, Header } from "./components";
import {
  ActivityIcon,
  AnalyticIcon,
  CheckMarkIcon,
  ScheduleIcon,
  UsersIcon,
} from "../../assets";
import { useMediaQuery } from '../../hookss/useMediaQuery';

export const Layout = (props: LayoutTypes): JSX.Element => {
  const [showSubLinks, setShowSubLinks] = useState<boolean>(true);
  const isMobileView = useMediaQuery("(max-width: 640px)");
  const isTabletView = useMediaQuery("(max-width: 840px)");
  const [isSideNavVisible, setSideNavVisible] = useState<boolean>(true);

  useEffect(() => {
    if (isMobileView || isTabletView) {
      setSideNavVisible(false);
    } else {
      setSideNavVisible(true);
    }
  }, [isMobileView, isTabletView]);

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
          active: true,
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
      {isMobileView || isTabletView ? (
        <div
          onClick={() => setSideNavVisible(false)}
          className={`fixed top-0 left-0 bottom-0 w-full bg-gray-800/60 z-20 ${
            isSideNavVisible ? "" : "hidden"
          }`}
        ></div>
      ) : null}
      <div
        className={`w-[17rem] fixed lg:static z-30 flex-none bg-white h-full border-r ${
          isSideNavVisible ? "" : "hidden"
        }`}
      >
        <Sidebar {...{ navbarData: sidebarData }} />
      </div>
      <div className="flex-1 bg-white w-cal-288">
        <div className="border-b h-[78px]">
          <Header
            {...{ onClick: () => setSideNavVisible(!isSideNavVisible) }}
          />
        </div>
        <div className="h-full">{props.children}</div>
      </div>
    </div>
  );
};
