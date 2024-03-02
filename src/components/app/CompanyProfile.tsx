import React, { useState } from "react";
import { Container, Typography, Tab, Tabs, AppBar } from "@mui/material";
import TabPanel from "./TabPanel";
import Overview from "./Overview";
import CompanyAddress from "./CompanyAddress";
import CompanyPolicies from "./CompanyPolicies";

export default function CompanyProfile() {
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Container>
      <AppBar
        position="relative"
        sx={{ backgroundColor: "#201658", textAlign: "center" }}
      >
        <Typography
          variant="h6"
          sx={{ color: "white", textTransform: "upperCase" }}
        >
          Company Profile
        </Typography>
        <Tabs value={value} onChange={handleTabs} centered>
          <Tab label="Overview" sx={{ color: "white" }} />
          <Tab label="Address" sx={{ color: "white" }} />
          <Tab label="Policies" sx={{ color: "white" }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyAddress />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompanyPolicies />
      </TabPanel>
    </Container>
  );
}
