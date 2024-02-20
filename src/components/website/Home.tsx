import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import InformationChart from "./InformationChart";
import Landing from "./Landing";
import Plan from "./Plan";
import Benefits from "./Benefits";
import Slider from "./Slider";

function Home() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundImage:
            "url(https://ik.imagekit.io/nwssoft/Payroll-portal/HRIS-Website/27472520_1340.jpg?updatedAt=1708107623790)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CssBaseline />
        <Landing />
        <Benefits />
        <Slider />
        <Plan />
        <InformationChart />
      </Box>
    </Fragment>
  );
}

export default Home;
