import Dashboard from "../components/app/Dashboard";
import Home from "../components/website/Home";
import Login from "../components/website/Login";
import { RouteComponent } from "../components/interfaces/Interfaces";

const routesList: RouteComponent[] = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login },
];

export default routesList;
