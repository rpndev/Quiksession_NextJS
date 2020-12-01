import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useStudioFormState } from "../../StudioContext";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createStudio, updateStudio } from "../../../../services";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  table: {
    minWidth: 650,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "50px",
  },
}));

export default function ResultForm({ history, reset, onConfirm }) {
  const classes = useStyles();
  // const [submitError, setSubmitError] = useState(null);
  const { state, dispatch } = useStudioFormState();
  const onSubmit = async () => {
    try {
      const formData = new FormData();
      let price = 0;
      for (let i = 0; i < state.roomInfo.length; i++) {
        if (state.roomInfo[i].photo) {
          formData.append(
            "room",
            state.roomInfo[i].photo,
            state.roomInfo[i].photo.name
          );
          state.roomInfo[i].photo = state.roomInfo[i].photo.name;
        }
        if (state.roomInfo[i].price) price += parseInt(state.roomInfo[i].price);
      }
      for (let i = 0; i < state.serviceInfo.length; i++) {
        if (state.serviceInfo[i].price)
          price += parseInt(state.serviceInfo[i].price);
      }
      for (let i = 0; i < state.equipInfo.length; i++) {
        if (state.equipInfo[i].price)
          price += parseInt(state.equipInfo[i].price);
      }
      for (let i = 0; i < state.engineerInfo.length; i++) {
        if (state.engineerInfo[i].price)
          price += parseInt(state.engineerInfo[i].price);
      }

      formData.append("photo", state.studioInfo.photo);
      formData.append("name", state.studioInfo.name);
      formData.append("address", state.studioInfo.address);
      formData.append("location", JSON.stringify(state.studioInfo.location));
      formData.append("phoneNumber", state.studioInfo.phoneNumber);
      formData.append("roomType", state.studioInfo.roomType);
      formData.append("room", JSON.stringify(state.roomInfo));
      formData.append("service", JSON.stringify(state.serviceInfo));
      formData.append("equip", JSON.stringify(state.equipInfo));
      formData.append("engineer", JSON.stringify(state.engineerInfo));
      formData.append("price", price);
      console.log(state.studioId);
      if (state.studioId === -1) await createStudio(formData);
      else await updateStudio(state.studioId, formData);
      onConfirm();
      dispatch({ type: "SUBMIT" });
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <form noValidate>
        <Typography variant="h4">New Studio Information</Typography>
        <CssBaseline />
        {/* <p>{state}</p> */}
        <Typography variant="h5">Studio</Typography>
        <p>Name: {state.studioInfo.name}</p>
        <p>Address: {state.studioInfo.address}</p>
        <p>PhoneNumber: {state.studioInfo.phoneNumber}</p>
        <Typography variant="h5">Room</Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Room Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.roomInfo.map((index, row) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.roomName}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h5">Service</Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Service Name</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.serviceInfo.map((index, row) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.serviceName}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h5">Equipment</Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Equipment Name</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.equipInfo.map((index, row) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.equipName}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h5">Engineer</Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Engineer Name</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.engineerInfo.map((index, row) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.engineerName}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button type="button" onClick={reset}>
          Edit
        </Button>
        <Button
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary"
          onClick={(e) => onSubmit(e)}
        >
          Confirm
        </Button>
      </form>
    </Container>
  );
}
