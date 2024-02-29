import { Container, Divider, Grid, Paper, Typography } from "@mui/material";

export default function CompanyPolicies() {
  return (
    <Container fixed sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{ color: "#936c6c", textTransform: "uppercase" }}
                >
                  Company Policies
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  sx={{ color: "#808080", textAlign: "center" }}
                >
                  No Policies uploaded yet
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
