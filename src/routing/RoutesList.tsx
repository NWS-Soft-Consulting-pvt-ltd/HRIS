import Dashboard from "../components/app/Dashboard";
import { RouteComponent } from "../components/interfaces/Interfaces";

const routesList: RouteComponent[] = [
  { path: "/dashboard", component: <Dashboard /> },
];

export default routesList;
