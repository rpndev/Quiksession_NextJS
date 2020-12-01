import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormHelperText from "@material-ui/core/FormHelperText";
import { login } from "../services";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  right: {
    marginLeft: "auto",
  },
}));

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    // const googleURL = decodeURI(history.location.search).split("valid=")[1];
    // if (googleURL) {
    //   localStorage.setItem("auth", googleURL);
    //   history.push("/");
    // }
  }, []);

  const validateForm = () => {
    let hasError = false;
    if (email.length === 0) {
      setEmailError("Email is required");
      hasError = true;
    }
    if (password.length === 0) {
      setPasswordError("Password is required");
      hasError = true;
    }
    return !hasError;
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitError(null);
    try {
      await login({ email, password });
      router.push("/");
    } catch (e) {
      setSubmitError(e.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(null);
            }}
            error={!!emailError}
          />
          {emailError && <FormHelperText error>{emailError}</FormHelperText>}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(null);
            }}
            error={!!passwordError}
          />
          {passwordError && (
            <FormHelperText error>{passwordError}</FormHelperText>
          )}

          {submitError && <FormHelperText error>{submitError}</FormHelperText>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitLogin}
          >
            Sign In
          </Button>

          <Grid container alignItems="center">
            <Grid>
              <Link href="/register">
                <a>{"Don't have an account? Sign Up"}</a>
              </Link>
            </Grid>
            <Grid className={classes.right}>
              <Link href="/forgetPassword">
                <a>{"Forget Password?"}</a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
