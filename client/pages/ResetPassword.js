import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { updatePassword } from "../../services";
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

export default function ResetPassword({ history, match }) {
  const classes = useStyles();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(match.params.userId);
  }, []);

  const validateForm = () => {
    let hasError = false;
    if (newPassword.length === 0 || confirmPassword.length === 0) {
      setNewPasswordError("Password is required");
      hasError = true;
    }

    if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Password is not same");
      hasError = true;
    }
    return !hasError;
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitError(null);
    try {
      const newData = {
        userId,
        newPassword,
      };
      await updatePassword(newData);
      history.push("/login");
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
          Update your password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="New Password"
            name="newPassword"
            type="password"
            autoComplete="newPassword"
            autoFocus
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setNewPasswordError(null);
            }}
            error={!!newPasswordError}
          />
          {newPasswordError && (
            <FormHelperText error>{newPasswordError}</FormHelperText>
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
            autoComplete="confirmPassword"
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitPassword}
          >
            Update Password
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
