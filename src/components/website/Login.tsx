// import { FC, Fragment } from "react";
// import { LoginProps } from "../interfaces/Interfaces";
// import { Button, Container, Typography } from "@mui/material";

// const Login: FC<LoginProps> = ({ onLogin, isAuthenticated }) => {
//   return (
//     <Fragment>
//       <Container sx={{ marginTop: 10 }}>
//         {isAuthenticated ? (
//           <Typography>You are already logged in.</Typography>
//         ) : (
//           <Button onClick={onLogin} color="info">
//             Login
//           </Button>
//         )}
//       </Container>
//     </Fragment>
//   );
// };

// export default Login;

import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { LoginProps } from "../interfaces/Interfaces";

export default function Login({
  isAuthenticated,
  onLogin,
}: LoginProps) {
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      let object = {
        userName: data.get("userName"),
        password: data.get("password"),
      };
      let result = await axios.post("http://localhost:4000/login", object);
      if (result.data) {
        alert(result.data.message);
        sessionStorage.setItem("uid", result.data.uid);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let uid = sessionStorage.getItem("uid");
    if (uid) {
      navigate("/dashboard");
    }
  }, [navigate]);

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
            src="https://ik.imagekit.io/nwssoft/Payroll-portal/office-4857268.jpg?updatedAt=1708092763714"
          ></Grid>
          <Grid item xs={12} md={5}>
            <Grid
              container
              spacing={4}
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
                  fullWidth
                  id="email"
                  size="medium"
                  name="userName"
                  label="User Name"
                  autoComplete="userName"
                  autoFocus
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
