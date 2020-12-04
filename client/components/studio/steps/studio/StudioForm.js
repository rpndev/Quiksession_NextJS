import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import GeoCoderInput from "../../../geocoder/GeoCoderInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "50px",
  },
  select: {
    marginTop: theme.spacing(1),
  },
  selectLabel: {
    background: "#fff",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

function StudioForm({
  formError,
  submitButtonText = "Next",
  handleSubmit,
  preValue,
  history,
}) {
  const classes = useStyles();
  const [name, setName] = useState(preValue ? preValue.name : "");
  const [nameError, setNameError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState(
    preValue ? preValue.phoneNumber : ""
  );
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  const [email, setEmail] = useState(preValue ? preValue.email : "");
  const [emailError, setEmailError] = useState(null);

  const [address, setAddress] = useState(preValue ? preValue.address : "");
  const [addressError, setAddressError] = useState(null);

  const [location, setLocation] = useState(preValue ? preValue.location : "");

  const [photo, setPhoto] = useState("");

  const validateForm = () => {
    let hasError = false;
    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }

    if (!address) {
      setAddressError("Address is required");
      hasError = true;
    }

    if (!phoneNumber) {
      setPhoneNumberError("PhoneNumber is required");
      hasError = true;
    }

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    }
    return !hasError;
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const formData = {
      name,
      email,
      address,
      location,
      phoneNumber,
      photo,
    };
    handleSubmit(formData);
  };

  const onChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  // const cancel = (e) => {
  //   e.preventDefault();
  //   history.push("/studios");
  // };

  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
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
              label="Email"
              name="email"
              autoComplete="off"
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
              id="phoneNumber"
              label="PhoneNumber"
              name="phoneNumber"
              autoComplete="off"
              autoFocus
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setPhoneNumberError(null);
              }}
              error={!!phoneNumberError}
            />
            {phoneNumberError && (
              <FormHelperText error>{phoneNumberError}</FormHelperText>
            )}

            <input type="file" onChange={onChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <GeoCoderInput
              hasError={!!addressError}
              address={address ? address : null}
              location={location ? location : null}
              onChange={(add, loc) => {
                setAddress(add);
                setLocation(loc);
                setAddressError(null);
              }}
            />
            {addressError && (
              <FormHelperText error>{addressError}</FormHelperText>
            )}
          </Grid>
          {formError && <FormHelperText error>{formError}</FormHelperText>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            {submitButtonText}
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default withRouter(StudioForm);
