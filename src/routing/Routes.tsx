import CompanyProfile from "../components/app/CompanyProfile";
import { RouteComponent } from "../components/interfaces/Interfaces";
import About from "../components/website/About";
import Contact from "../components/website/Contact";
import Features from "../components/website/Features";
import HrManagement from "../components/website/HrManagement";
import Login from "../components/website/Login";
import Payroll from "../components/website/Payroll";
import Recruitment from "../components/website/Recruitment";
import TimeAttendance from "../components/website/TimeAttendance";

// website routes
export const websiteRoutes: RouteComponent[] = [
  { path: "/about-us", component: <About /> },
  { path: "/features", component: <Features /> },
  { path: "/payroll", component: <Payroll /> },
  { path: "/recruitment", component: <Recruitment /> },
  { path: "/hr-management", component: <HrManagement /> },
  { path: "/time-attendance", component: <TimeAttendance /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "/login", component: <Login /> },
];

// app routes
export const appRoutes: RouteComponent[] = [
  { path: "/dashboard/company-profile", component: <CompanyProfile /> },
];
