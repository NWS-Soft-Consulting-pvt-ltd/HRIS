import { FC, Fragment } from "react";
import { LoginProps } from "../interfaces/Interfaces";
import { Button, Container, Typography } from "@mui/material";

const Login: FC<LoginProps> = ({ onLogin, isAuthenticated }) => {
  return (
    <Fragment>
      <Container sx={{ marginTop: 10 }}>
        {isAuthenticated ? (
          <Typography>You are already logged in.</Typography>
        ) : (
          <Button onClick={onLogin} color="info">
            Login
          </Button>
        )}
      </Container>
    </Fragment>
  );
};

export default Login;
