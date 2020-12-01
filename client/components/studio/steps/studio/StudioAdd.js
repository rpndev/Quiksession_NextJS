import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import StudioForm from "./StudioForm";
import { useStudioFormState } from "../../StudioContext";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function StudioAdd({ goForward }) {
  const classes = useStyles();
  const [submitError, setSubmitError] = useState(null);
  const { state, dispatch } = useStudioFormState();
  const [roomType, setRoomType] = React.useState("music");
  const submitForm = async (formData) => {
    formData = { ...formData, roomType: roomType };
    try {
      await dispatch({ type: "ADD_STUDIO", payload: formData });
      goForward();
    } catch (e) {
      setSubmitError(e.message);
    }
  };

  const handleChange = (event) => {
    setRoomType(event.target.value);
  };

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="h4">Add A Studio</Typography>
        <FormControl component="fieldset" style={{ marginLeft: "300px" }}>
          <FormLabel component="legend">Room Type</FormLabel>
          <RadioGroup
            aria-label="room"
            name="room1"
            value={roomType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="music"
              control={<Radio />}
              label="Music Room"
            />
            <FormControlLabel
              value="photo"
              control={<Radio />}
              label="Video/Photo Room"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <CssBaseline />
      <StudioForm
        submitButtonText="Next"
        formError={submitError}
        handleSubmit={submitForm}
        preValue={state.studioInfo}
      />
    </Container>
  );
}
