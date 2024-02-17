import { Container } from "@mui/material";
import { FC, Fragment, ReactNode, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteComponent } from "../components/interfaces/Interfaces";
import Home from "../components/website/Home";
import Layout from "../components/website/Layout";
import Login from "../components/website/Login";
import routesList from "./RoutesList";
import Features from "../components/website/Features";
import About from "../components/website/About";
import Contact from "../components/website/Contact";
import Payroll from "../components/website/Payroll";
import Recruitment from "../components/website/Recruitment";
import HrManagement from "../components/website/HrManagement";

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
            <Route path="/features" element={<Features />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/hr-management" element={<HrManagement />} />
            <Route
              path="/login"
              element={
                <Login
                  onLogin={handleLogin}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
          </Route>
          {routesList.map((componentObject: RouteComponent, index: number) => (
            <Fragment key={index}>
              <Route
                path={componentObject.path.toLowerCase()}
                element={
                  <ProtectedRoute
                    element={
                      <Fragment>
                        <Container>
                          <componentObject.component
                            props={componentObject.props}
                          />
                        </Container>
                      </Fragment>
                    }
                  />
                }
              />
            </Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
