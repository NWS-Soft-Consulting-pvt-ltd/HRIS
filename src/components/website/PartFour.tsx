import {
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Container,
} from "@mui/material";
import { useState } from "react";
import { ContactUs } from "../interfaces/Interfaces";

const PartFour = () => {
  const [contactInfo, setContactInfo] = useState<ContactUs | undefined>(
    undefined
  );

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3} padding={3}>
            <Grid item xs={12} marginBottom={3}>
              <Typography
                variant="h4"
                textTransform="uppercase"
                textAlign="center"
              >
                contact us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                value={contactInfo?.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                fullWidth
                value={contactInfo?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contact"
                variant="outlined"
                type="text"
                size="small"
                fullWidth
                value={contactInfo?.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Enter a message"
                type="text"
                size="small"
                spellCheck
                minRows={3}
                multiline
                value={contactInfo?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{
                  alignSelf: "flex-start",
                  backgroundColor: "#71869A",
                  "&:hover": { backgroundColor: "#D3D3D3" },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src="https://ik.imagekit.io/nwssoft/Payroll-portal/people-collaborating.png?updatedAt=1707743699185"
            alt="man-sitting-with-laptop"
            width="100%"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PartFour;
