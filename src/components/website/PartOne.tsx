import { Button, Container, Grid, Typography } from "@mui/material";

const PartOne = () => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <img
            src={
              "https://ik.imagekit.io/nwssoft/Payroll-portal/3992745.jpg?updatedAt=1707475519720"
            }
            alt="Man-Standing-Pencil"
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            textTransform="uppercase"
          >
            step into the hr & payroll future with nws soft
          </Typography>
          <Typography variant="body1" marginTop={5} textAlign="justify">
            HR and payroll software is a comprehensive solution that streamlines
            human resources and payroll processes. It automates tasks like
            employee data management, attendance tracking, benefits
            administration, and tax calculations. This software ensures accurate
            payroll processing, reducing errors and saving time. It also assists
            in compliance with tax regulations and labor laws. HR and payroll
            software offers efficiency, accuracy, and data security, making it
            an essential tool for businesses of all sizes.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "30px",
              fontSize: "16px",
              alignSelf: "flex-start",
              backgroundColor: "#71869A",
              "&:hover": { backgroundColor: "#D3D3D3" },
            }}
          >
            Request For Demo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PartOne;
