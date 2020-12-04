import React, { useState, useEffect } from "react";
import Link from "next/link";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Container,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";

import SideLayout from "../../components/SideLayout";
import StudioAddDialog from "../../components/studio/StudioAddDialog";
import { StudioFormProvider } from "../../components/studio/StudioContext";
import { fetchStudios, deleteStudio, getStudio } from "../../services";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  closeButton: {
    cursor: "pointer",
    position: "absolute",
    right: theme.spacing(1 / 2),
    top: theme.spacing(1 / 2),
    color: theme.palette.grey[500],
  },
}));

export default function Studios() {
  const classes = useStyles();
  const [studios, setStudios] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [role, setRole] = useState(null);
  const [open, setOpen] = useState(false);
  const [initialState, setInitialState] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStudios();
        const auth = JSON.parse(localStorage.getItem("auth"));
        let role = null;
        console.log("This is auth", auth);
        if (auth && auth.user) {
          role = auth.user.role;
          setRole(role);
          if (auth.user.role === "owner") {
            let temp = data.map((item) => {
              if (item.owner.id === auth.user.id) return item;
            });
            setStudios(temp);
            return;
          }
        }

        setStudios(data);
      } catch (e) {
        setFetchError(e.message);
      }
    };
    fetchData();
  }, []);

  function handleConfirm() {
    setOpen(false);
  }

  function handleOnOpen(isFlag) {
    if (isFlag) {
      setInitialState({
        studioInfo: {},
        roomInfo: [],
        equipInfo: [],
        serviceInfo: [],
        engineerInfo: [],
        studioId: -1,
        isSubmit: false,
      });
    }
    setOpen(true);
  }
  const onEditStudio = async (studioId) => {
    try {
      const data = await getStudio(studioId);
      const studioInfo = {
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber,
        file: data.file,
        roomType: data.roomType,
      };
      const roomInfo = data.room;
      const engineerInfo = data.engineer;
      const serviceInfo = data.service;
      const equipInfo = data.equip;
      setInitialState({
        studioInfo,
        roomInfo,
        serviceInfo,
        equipInfo,
        engineerInfo,
        studioId,
      });
      handleOnOpen(false);
    } catch (e) {
      setFetchError(e.message);
    }
  };

  const onDelete = async (studioId) => {
    if (window.confirm("Are you sure you want to delete this studio?")) {
      try {
        await deleteStudio(studioId);
        fetchData();
      } catch (e) {}
    }
  };
  return (
    <SideLayout>
      <Container component="main" maxWidth="xl" className={classes.container}>
        <TableContainer component={Paper}>
          <React.Fragment>
            {role === "owner" && (
              <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                <Button
                  color="secondary"
                  variant="contained"
                  // component={Link}
                  onClick={() => {
                    handleOnOpen(true);
                  }}
                >
                  ADD NEW BUSINESS
                </Button>
              </Box>
            )}
            <Dialog open={open} fullWidth={true} maxWidth={"md"}>
              <StudioFormProvider initialState={initialState}>
                <StudioAddDialog onConfirm={handleConfirm} />
              </StudioFormProvider>
              <IconButton aria-label="Close" className={classes.closeButton}>
                <CloseIcon
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </IconButton>
            </Dialog>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>PhoneNumber</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Owner</StyledTableCell>
                  <StyledTableCell size="small" align="center">
                    Actions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studios.map(
                  (studio) =>
                    studio && (
                      <TableRow key={studio.id}>
                        <StyledTableCell>{studio.name}</StyledTableCell>
                        <StyledTableCell>{studio.address}</StyledTableCell>
                        <StyledTableCell>{studio.phoneNumber}</StyledTableCell>
                        <StyledTableCell>${studio.price}</StyledTableCell>
                        <StyledTableCell>{studio.owner.name}</StyledTableCell>
                        {role === "owner" ? (
                          <StyledTableCell size="small" align="center">
                            <IconButton
                              aria-label="edit"
                              // component={Link}
                              onClick={() => {
                                onEditStudio(studio.id);
                              }}
                            >
                              <EditIcon fontSize="inherit" />
                            </IconButton>

                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                onDelete(studio.id);
                              }}
                            >
                              <DeleteIcon fontSize="inherit" />
                            </IconButton>
                          </StyledTableCell>
                        ) : (
                          <StyledTableCell size="small" align="center">
                            <Link
                              href={{
                                pathname: "/Booking",
                                query: { studioId: studio.id },
                              }}
                            >
                              <Button variant="contained" color="secondary">
                                Book
                              </Button>
                            </Link>
                          </StyledTableCell>
                        )}
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
            {fetchError && (
              <Typography variant="body2" color="error">
                {fetchError}
              </Typography>
            )}
          </React.Fragment>
        </TableContainer>
      </Container>
    </SideLayout>
  );
}
