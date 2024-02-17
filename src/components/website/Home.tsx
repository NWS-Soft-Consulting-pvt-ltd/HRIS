import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import PartFour from "./PartFour";
import PartOne from "./PartOne";
import PartThree from "./PartThree";
import PartTwo from "./PartTwo";

function Home() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundImage:
            "url(https://ik.imagekit.io/nwssoft/Payroll-portal/HRIS-Website/27472520_1340.jpg?updatedAt=1708107623790)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <CssBaseline />
        <PartOne />
        <PartTwo />
        <PartThree />
        <PartFour />
      </Box>
    </Fragment>
  );
}

export default Home;
