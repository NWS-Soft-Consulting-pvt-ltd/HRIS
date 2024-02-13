import { FC } from "react";

export interface RouteComponent {
  path: string;
  component: FC<any>;
  props?: unknown;
}

export interface LoginProps {
  onLogin: () => void;
  isAuthenticated: boolean;
}

export interface NavbarProps {
  onLogout: () => void;
  isAuthenticated: boolean;
}

export interface ContactUs {
  name: string;
  email: string;
  phone: bigint;
  message: string;
}
