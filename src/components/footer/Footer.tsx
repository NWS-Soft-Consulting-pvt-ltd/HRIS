import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
// import { useNavigate } from "react-router-dom";

export default function Footer() {
//   const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#696969",
        // paddingTop: "1rem",
        // paddingBottom: "1rem",
        color: "white",
        mt: "100px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} lg={6}>
            <Stack direction="row" spacing={2} marginBottom={"2rem"}>
              <Grid display="grid" alignItems="center">
                <LocationOnIcon sx={{ color: "orange", fontSize: "2rem" }} />
              </Grid>
              <Grid>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6">Find Us</Typography>
                  <Typography variant="body2" gutterBottom>
                    Prerna Academy Pvt. Ltd. 82 Swami Vivekanand Nagar Telephone
                    Square, Kanadia Road Indore (M.P). Pin 452018
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Stack direction="row" spacing={2} marginBottom={"2rem"}>
              <Grid display="grid" alignItems="center">
                <PhoneEnabledIcon sx={{ color: "orange", fontSize: "2rem" }} />
              </Grid>
              <Grid>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6">Call Us</Typography>
                  <Typography variant="body2" gutterBottom>
                    +91 731 429 8599 <br></br>
                    +91 835 889 9900
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Stack direction="row" spacing={2} marginBottom={"2rem"}>
              <Grid display="grid" alignItems="center">
                <EmailIcon sx={{ color: "orange", fontSize: "2rem" }} />
              </Grid>
              <Grid>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6">Mail Us</Typography>
                  <Typography variant="body2" gutterBottom>
                    info@prernaacademy.in
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider
        color="white"
        sx={{ height: 1, width: "auto", margin: "20px 60px" }}
      />
      <Container maxWidth="lg">
        <Grid container direction="row" mt={6}>
          {/* <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom>
              <Stack direction="row" spacing={2} marginBottom={"2rem"}>
                <img
                  src="https://ik.imagekit.io/nwssoft/NWS_Prerna_Project/prerna-academy-logo.png?updatedAt=1679569413646"
                  alt="Logo"
                  width="10%"
                />
                <Typography>Prerna Academy</Typography>
              </Stack>
            </Typography>

            <Typography variant="body2" gutterBottom marginBottom={"2rem"}>
              Prerna Academy experts will evaluate your profile, background and
              help align your interests and goals with the right fit of
              colleges.
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              textAlign={{ xs: "center", md: "start" }}
            >
              Follow Us
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              marginBottom={"2rem"}
              justifyContent={{ xs: "center", md: "start" }}
            >
              <Avatar sx={{ background: "blue" }}>
                <Link
                  href="https://www.facebook.com/p/Prerana-Academy-100063770839956/"
                  underline="none"
                  sx={{ color: "white", cursor: "pointer" }}
                >
                  <FacebookIcon />
                </Link>
              </Avatar>
              <Avatar sx={{ background: "green" }}>
                <Link
                  href="https://www.facebook.com/p/Prerana-Academy-100063770839956/"
                  underline="none"
                  sx={{ color: "white", cursor: "pointer" }}
                >
                  <TwitterIcon />
                </Link>
              </Avatar>
              <Avatar sx={{ background: "red" }}>
                <Link
                  href="https://www.facebook.com/p/Prerana-Academy-100063770839956/"
                  underline="none"
                  sx={{ color: "white", cursor: "pointer" }}
                >
                  <GoogleIcon />
                </Link>
              </Avatar>
            </Stack>
          </Grid> */}

          {/* <Grid
            item
            md={3}
            xs={12}
            marginBottom={"2rem"}
            textAlign={{ xs: "center" }}
          >
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">Home</Typography>
              </Link>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("aboutus");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">About Us</Typography>
              </Link>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("services");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">Services</Typography>
              </Link>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("FAQ");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">FAQ</Typography>
              </Link>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("career");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">Career</Typography>
              </Link>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("payment");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">Pay Now</Typography>
              </Link>
              <Link
                underline="none"
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                //   navigate("contactus");
                  window.scrollTo(0, 0);
                }}
              >
                <Typography color="orange">Contact Us</Typography>
              </Link>
            </Stack>
          </Grid> */}

          {/* <Grid item md={3} xs={12} paddingBottom="20px">
            <Typography variant="h6" gutterBottom textAlign={{ xs: "center" }}>
              Our Location
            </Typography>

            <a href="https://www.google.com/maps">
              <iframe
                width="100%"
                height="80%"
                src="https://maps.google.com/maps?q=indore&t=&z=10&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </a>
          </Grid> */}

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Typography
                sx={{ justifyContent: "center!important", display: "flex" }}
              >
                Copyright © 2023 Prerna Academy. All rights reserved.
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                sx={{ justifyContent: "center!important", pt: 1 }}
              >
                <Button
                  sx={{ textTransform: "capitalize", fontSize: "14px" }}
                  onClick={() => {
                    // navigate("refund");
                    window.scrollTo(0, 0);
                  }}
                >
                  refund and cancellation
                </Button>
                <Button
                  sx={{ textTransform: "capitalize", fontSize: "14px" }}
                  onClick={() => {
                    // navigate("terms");
                    window.scrollTo(0, 0);
                  }}
                >
                  terms & conditions
                </Button>
                <Button
                  sx={{ textTransform: "capitalize", fontSize: "14px" }}
                  onClick={() => {
                    // navigate("policy");
                    window.scrollTo(0, 0);
                  }}
                >
                  privacy policy
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
