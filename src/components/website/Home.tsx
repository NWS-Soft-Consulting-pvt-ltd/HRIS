import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import "../../css/Home.css";
import PartFour from "./PartFour";
import PartOne from "./PartOne";
import PartThree from "./PartThree";
import PartTwo from "./PartTwo";

function Home() {
  return (
    <Fragment>
      <Box className="home-container">
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
