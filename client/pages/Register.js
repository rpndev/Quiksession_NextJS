import React, { useState } from "react";
import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { register } from "../services";
import { validateEmail } from "../utils/validation";
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

export default function Register({ history }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [role, setRole] = useState("");
  // const [credit, setCredit] = useState(0);
  const credit = 0;
  const validateForm = () => {
    let hasError = false;
    if (name.length === 0) {
      setNameError("Name is required");
      hasError = true;
    }
    if (email.length === 0) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Email is invalid");
      hasError = true;
    } else if (role.length === 0) {
      setEmailError("role is required");
      hasError = true;
    }
    if (password.length === 0) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Confirm password doesn't match");
      hasError = true;
    }
    return !hasError;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitError(null);
    try {
      await register({ name, email, password, role, credit }).then((data) => {
        if (data.userId && data.url && data.role === "owner") {
          localStorage.setItem("userId", JSON.stringify(data.userId));
          window.location = data.url;
        } else {
          history.push("/login");
        }
      });
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
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(null);
            }}
            error={!!nameError}
          />

          {nameError && <FormHelperText error>{nameError}</FormHelperText>}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
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
            autoComplete="off"
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

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="off"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError(null);
            }}
            error={!!confirmPasswordError}
          />
          {confirmPasswordError && (
            <FormHelperText error>{confirmPasswordError}</FormHelperText>
          )}

          {submitError && <FormHelperText error>{submitError}</FormHelperText>}
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="role"
              name="role"
              row
              value={role}
              onChange={(e) => {
                setRole(e.currentTarget.value);
              }}
            >
              <FormControlLabel
                value="owner"
                control={<Radio />}
                label="Owner"
              />
              <FormControlLabel
                value="artist"
                control={<Radio />}
                label="Artist"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login">
                <a>{"Already have an account? Sign In"}</a>
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
