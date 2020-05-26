import React, { useState } from "react";
import {
  Paper,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import useStyles from "./Login.styles";

const LOGIN = gql`
  mutation logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password)
  }
`;

export default function Login() {
  const classes = useStyles();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [login, loginResult] = useMutation(LOGIN);

  const handleLogin = async () => {
    const response = await login({ variables: { email: userName, password } });
    console.log(response);
  };

  if (loginResult.error) return <div>Error</div>
  return (
    <Paper className={classes.paperContainer}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img className={classes.logo} src={""} alt="" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    className={classes.field}
                    value={userName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event) => setUserName(event.target.value)}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.field}
                    label="Password"
                    type="password"
                    value={password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button color="primary" onClick={handleLogin}>
                    {loading ? "Logging In" : "Login"}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}
