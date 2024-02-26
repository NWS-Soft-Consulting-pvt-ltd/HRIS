import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import { ReactComponent as MicrosoftLogo } from "../../images/Microsoft-Logo.svg";
import images from "../../images/images.json";
import { LOGIN, LOGIN_MICROSOFT } from "../../api/Server";
import { getRequest, postRequest } from "../../api/Api";
import { AxiosError, AxiosResponse } from "axios";

export default function Login() {
  const handleLoginWithMicrosoft = () => {
    try {
      getRequest(LOGIN_MICROSOFT)
        .then((response: AxiosResponse) => console.log(response.data))
        .catch((error: AxiosError) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      let loginData = {
        userName: data.get("userName"),
        password: data.get("password"),
      };
      postRequest(LOGIN, "", loginData)
        .then((response: AxiosResponse) => console.log(response?.data))
        .catch((error: AxiosError) => console.error(error.response?.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container sx={{ mt: 10, mb: 5 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={7}
            component="img"
            borderRadius={3}
            src={`${images.logingInImage.src}`}
            alt={`${images.logingInImage.alt}`}
          ></Grid>
          <Grid item xs={12} md={5}>
            <Grid
              container
              spacing={2}
              padding={4}
              component="form"
              onSubmit={handleSubmit}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  color="#191970"
                  fontWeight="600"
                  textTransform="uppercase"
                  gutterBottom
                >
                  login
                </Typography>
                <Typography color="#9e9e9e" textTransform="capitalize">
                  welcome to SAWA HRIS
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  id="email"
                  size="medium"
                  name="userName"
                  label="User Name"
                  type="email"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  size="medium"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <MicrosoftLogo width={25} style={{ marginRight: 5 }} />
                <Button onClick={handleLoginWithMicrosoft}>
                  Continue with Microsoft
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  size="medium"
                  startIcon={<VpnKeyIcon />}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
