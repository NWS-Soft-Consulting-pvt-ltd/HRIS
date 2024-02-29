import { ReactNode } from "react";

export interface RouteComponent {
  path: string;
  component: JSX.Element;
  props?: unknown;
}

export interface ContactUs {
  name: string;
  email: string;
  phone: number;
  message: string;
}

export interface SidebarItem {
  id: string;
  name: string;
  subItem: boolean;
  icon: JSX.Element;
}

export interface SidebarSubItem {
  id: string;
  list: SidebarItem[];
}

export interface TabPanelProps {
  children: ReactNode;
  value: any;
  index: any;
}
