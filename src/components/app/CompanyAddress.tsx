import { Container, Divider, Grid, Paper, Typography } from "@mui/material";

export default function CompanyAddress() {
  return (
    <Container fixed sx={{ marginTop: "30px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{ color: "#936c6c", textTransform: "uppercase" }}
                >
                  Registered Office
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  NWS Soft Consulting Pvt Ltd
                </Typography>
                <Typography variant="body2" sx={{ color: "#808080" }}>
                  503 & 504 Orville Business Port
                </Typography>
                <Typography variant="body2" sx={{ color: "#808080" }}>
                  VIMAN NAGAR NEAR AIR FROCE
                </Typography>
                <Typography variant="body2" sx={{ color: "#808080" }}>
                  PUNE, Maharashtra, INDIA - 411014
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
