import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface LayoutTypes {
  children: JSX.Element | null
}

export interface SidebarTypes {
  navbarData: ListItemTypes[];
}

export interface UserBadgeTypes {
  name: string,
  email: string
}

interface subLink {
  title: string,
  active?: boolean
}

export interface ListItemTypes {
  icon: string;
  title: string;
  active?: boolean,
  onClick?: () => void,
  subLinks?: subLink[];
}

export interface HeaderTypes {

}

export interface SearchBarType extends InputHTMLAttributes<HTMLInputElement> { }

export interface ActionPanelTypes {} 