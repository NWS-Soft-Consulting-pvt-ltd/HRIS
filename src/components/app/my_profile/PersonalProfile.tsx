import { Divider, Grid, Paper, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function PersonalProfile() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  PERSONAL INFO
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Name
                </Typography>
                <Typography variant="body2" color="#808080">
                  Seema Momin
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Date of Birth
                </Typography>
                <Typography variant="body2" color="#808080">
                  29/04/1999
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Gender
                </Typography>
                <Typography variant="body2" color="#808080">
                  Female
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Blood Group
                </Typography>
                <Typography variant="body2" color="#808080">
                  A +
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Marital Status
                </Typography>
                <Typography variant="body2" color="#808080">
                  Single
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  CONTACT INFO
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Official Email ID
                </Typography>
                <Typography variant="body2" color="#808080">
                  seema.momin@nwssoft.com
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Personal Email ID
                </Typography>
                <Typography variant="body2" color="#808080">
                  seemamomin27@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Phone Number
                </Typography>
                <Typography variant="body2" color="#808080">
                  9049979931
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Alternate Phone Number
                </Typography>
                <Typography variant="body2" color="#808080">
                  7499618920
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  ADDRESSES
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Current Address
                </Typography>
                <Typography variant="body2" color="#808080">
                  Wadgaon Sheri
                </Typography>
                <Typography variant="body2" color="#808080">
                  Pune, Maharashtra, India - 411014
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Permanent Address
                </Typography>
                <Typography variant="body2" color="#808080">
                  Wadgaon Sheri
                </Typography>
                <Typography variant="body2" color="#808080">
                  Pune, Maharashtra, India - 411014
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  House Type
                </Typography>
                <Typography variant="body2" color="#808080">
                  Owned by Parent/Sibling
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Staying at Current Residence Since
                </Typography>
                <Typography variant="body2" color="#808080">
                  01/01/2010
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                  Living in Current City Since
                </Typography>
                <Typography variant="body2" color="#808080">
                  16/11/2022
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  Social Profile
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={12} spacing={2}>
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
    </>
  );
}
