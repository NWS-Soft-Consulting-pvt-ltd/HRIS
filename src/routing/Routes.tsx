import CompanyProfile from "../components/app/company_profile/CompanyProfile";
import EducationProfile from "../components/app/my_profile/EducationProfile";
import FamilyProfile from "../components/app/my_profile/FamilyProfile";
import PersonalProfile from "../components/app/my_profile/PersonalProfile";
import TeamProfile from "../components/app/my_profile/TeamProfile";
import WorkProfile from "../components/app/my_profile/WorkProfile";
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
  { path: "/dashboard/work-details", component: <WorkProfile /> },
  { path: "/dashboard/team-details", component: <TeamProfile /> },
  { path: "/dashboard/educational-details", component: <EducationProfile /> },
  { path: "/dashboard/family-details", component: <FamilyProfile /> },
  { path: "/dashboard/personal-details", component: <PersonalProfile /> },
];
