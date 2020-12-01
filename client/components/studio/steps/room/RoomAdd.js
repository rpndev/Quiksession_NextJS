import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RoomForm from "./RoomForm";
import { useStudioFormState } from "../../StudioContext";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function RoomAdd({ goForward, goBack, history }) {
  const classes = useStyles();
  const [submitError, setSubmitError] = useState(null);
  const { state, dispatch } = useStudioFormState();
  const submitForm = async (formData) => {
    try {
      dispatch({ type: "ADD_ROOM", payload: formData });
      goForward();
    } catch (e) {
      setSubmitError(e.message);
    }
  };

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <Typography variant="h4">
        {state.studioInfo.roomType === "music"
          ? "Add A Music Room"
          : "Add A Video/Photo Room"}
      </Typography>
      <CssBaseline />
      <RoomForm
        submitButtonText="Next"
        formError={submitError}
        handleSubmit={submitForm}
        goBack={goBack}
        preValue={state.roomInfo}
      />
    </Container>
  );
}
