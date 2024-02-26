import { FC, Fragment, ReactNode, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteComponent } from "../components/interfaces/Interfaces";
import About from "../components/website/About";
import Contact from "../components/website/Contact";
import Features from "../components/website/Features";
import Home from "../components/website/Home";
import HrManagement from "../components/website/HrManagement";
import Layout from "../components/website/Layout";
import Login from "../components/website/Login";
import Payroll from "../components/website/Payroll";
import Recruitment from "../components/website/Recruitment";
import TimeAttendance from "../components/website/TimeAttendance";
import routesList from "./RoutesList";

const AppRouter: FC = () => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(true);

  const handleLogin = () => {
    // Perform authentication logic (e.g., check credentials)
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setAuthenticated(false);
  };

  const ProtectedRoute: FC<{ element: ReactNode }> = ({ element }) => {
    return isAuthenticated ? <>{element}</> : <Navigate to="/login" replace />;
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route caseSensitive path="/features" element={<Features />} />
            <Route caseSensitive path="/about-us" element={<About />} />
            <Route caseSensitive path="/contact-us" element={<Contact />} />
            <Route caseSensitive path="/payroll" element={<Payroll />} />
            <Route
              caseSensitive
              path="/recruitment"
              element={<Recruitment />}
            />
            <Route
              caseSensitive
              path="/hr-management"
              element={<HrManagement />}
            />
            <Route
              caseSensitive
              path="/time-attendance"
              element={<TimeAttendance />}
            />
            <Route
              caseSensitive
              path="/login"
              element={<Login />}
            />
          </Route>
          {routesList.map((componentObject: RouteComponent, index: number) => (
            <Fragment key={index}>
              <Route
                caseSensitive
                path={componentObject.path.toLowerCase()}
                element={componentObject.component}
              />
            </Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
