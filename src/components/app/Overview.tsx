import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Overview() {
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
                  textTransform="uppercase"
                  color="#936c6c"
                >
                  Overview
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body1">Registered Company Name</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  NWS Soft Consulting Pvt Ltd
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body1">Brand Name</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  NWS
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography variant="body1">Company Official Email</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  ---
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body1">
                  Company Official Contact
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  ---
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography variant="body1">Website</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  nwssoft.com
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body1">Domain Name</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  nwssoft
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography variant="body1">Industry Type</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "13px", color: "#808080" }}
                >
                  ---
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}></Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{ color: "	#936c6c", textTransform: "uppercase" }}
                >
                  Social Profile
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={12} gap={5}>
                <LinkedInIcon
                  sx={{
                    color: "#0080ff",
                    cursor: "pointer",
                    "&:hover": { color: "#0056b3" },
                  }}
                />

                <FacebookRoundedIcon
                  sx={{
                    color: "#0040ff",
                    cursor: "pointer",
                    "&:hover": { color: "#002080" },
                  }}
                />
                <TwitterIcon
                  sx={{
                    color: "#00bfff",
                    cursor: "pointer",
                    "&:hover": { color: "#0080ff" },
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
