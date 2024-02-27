import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteComponent } from "../components/interfaces/Interfaces";
import Home from "../components/website/Home";
import Layout from "../components/website/Layout";
import { appRoutes, websiteRoutes } from "./Routes";

const AppRouter: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {websiteRoutes.map(
              (componentObject: RouteComponent, index: number) => (
                <Fragment key={index}>
                  <Route
                    caseSensitive
                    path={componentObject.path.toLowerCase()}
                    element={componentObject.component}
                  />
                </Fragment>
              )
            )}
          </Route>
          {appRoutes.map((componentObject: RouteComponent, index: number) => (
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
