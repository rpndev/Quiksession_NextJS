import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EquipForm from "./EquipForm";
import { useStudioFormState } from "../../StudioContext";

// import { createEquip } from "../../services";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function EquipAdd({ goForward, goBack, history }) {
  const classes = useStyles();
  const [submitError, setSubmitError] = useState(null);
  const { state, dispatch } = useStudioFormState();
  const submitForm = async (formData) => {
    try {
      //   await createEquip(formData);
      // history.push("/studios/result");
      dispatch({ type: "ADD_EQUIP", payload: formData });
      goForward();
    } catch (e) {
      setSubmitError(e.message);
    }
  };

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <Typography variant="h4">Add A Equipment</Typography>
      <CssBaseline />
      <EquipForm
        submitButtonText="Next"
        formError={submitError}
        handleSubmit={submitForm}
        goBack={goBack}
        preValue={state.equipInfo}
      />
    </Container>
  );
}
