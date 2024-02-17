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
            "url(https://ik.imagekit.io/nwssoft/Payroll-portal/HRIS-Website/28428245_rm222batch5-mind-16.jpg?updatedAt=1708107623763)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
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
