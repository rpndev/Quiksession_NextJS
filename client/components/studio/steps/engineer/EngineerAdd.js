import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EngineerForm from "./EngineerForm";
import { useStudioFormState } from "../../StudioContext";

// import { createEngineer } from "../../services";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function EngineerAdd({ goForward, goBack, history }) {
  const classes = useStyles();
  const [submitError, setSubmitError] = useState(null);
  const { state, dispatch } = useStudioFormState();
  const submitForm = async (formData) => {
    try {
      //   await createEngineer(formData);
      // history.push("/studios/result");
      dispatch({ type: "ADD_ENGINEER", payload: formData });
      goForward();
    } catch (e) {
      setSubmitError(e.message);
    }
  };

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <Typography variant="h4">
        {state.studioInfo.roomType === "music"
          ? "Add A Engineer"
          : "Add A Photographer"}
      </Typography>
      <CssBaseline />
      <EngineerForm
        submitButtonText="Next"
        formError={submitError}
        handleSubmit={submitForm}
        goBack={goBack}
        preValue={state.engineerInfo}
      />
    </Container>
  );
}
