import { Container } from "@mui/material";
import { FC, Fragment, ReactNode, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { RouteComponent } from "../components/interfaces/Interfaces";
import Home from "../components/website/Home";
import Layout from "../components/website/Layout";
import Login from "../components/website/Login";
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
