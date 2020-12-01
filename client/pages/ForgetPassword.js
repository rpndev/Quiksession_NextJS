import React, { useState } from "react";
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
import { forgetPassword } from "../services";
import FormHelperText from "@material-ui/core/FormHelperText";
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
}));

export default function ForgetPassword({ history }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [sendEmail, setSendEmail] = useState(false);
  const validateForm = () => {
    let hasError = false;
    if (email.length === 0) {
      setEmailError("Email is required");
      hasError = true;
    }
    return !hasError;
  };

  const submitResetPassword = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitError(null);
    try {
      await forgetPassword({ email });
      setSendEmail(true);
      //   history.push("/admin/dashboard");
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
          Reset your password
        </Typography>
        {!sendEmail ? (
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

            {submitError && (
              <FormHelperText error>{submitError}</FormHelperText>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitResetPassword}
            >
              Send password reset email
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/login">
                  <a>{"I Remember my password"}</a>
                </Link>
              </Grid>
            </Grid>
          </form>
        ) : (
          <h5 style={{ marginTop: "30px" }}>
            Reset password link has been sent to your email.
          </h5>
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
