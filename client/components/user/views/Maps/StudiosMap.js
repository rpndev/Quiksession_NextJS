import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import MapView from "./MapView";
import { fetchStudios } from "../../../../services";
import RangeSelectButton from "../../../popover/RangeSelectButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

/**
 * Helper functions
 */
const parseRange = (min, max) => {
  let minVal = null;
  let maxVal = null;
  minVal = parseInt(min);
  maxVal = parseInt(max);
  if (isNaN(minVal) || minVal < 0) {
    minVal = null;
  }

  if (isNaN(maxVal) || maxVal < 0) {
    maxVal = null;
  }

  if (minVal && maxVal && minVal > maxVal) {
    minVal = null;
    maxVal = null;
  }

  return [minVal && String(minVal), maxVal && String(maxVal)];
};

const useStyles = makeStyles((theme) => ({
  searchConatiner: {
    backgroundColor: "#3f51b5",
  },
  list: {
    width: "400px",
    height: "100%",
    position: "fixed",
    left: "0",
    overflowY: "auto",
    "z-index": "-2",

    "-webkit-box-shadow": "6px 2px 9px -2px rgba(184,184,184,1)",
    "-moz-box-shadow": "6px 2px 9px -2px rgba(184,184,184,1)",
    "box-shadow": "6px 2px 9px -2px rgba(184,184,184,1)",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "calc(50% - 56px)",
      top: "calc(50% + 56px)",

      "-webkit-box-shadow": "0px -6px 9px -2px rgba(184,184,184,1)",
      "-moz-box-shadow": "0px -6px 9px -2px rgba(184,184,184,1)",
      "box-shadow": "0px -6px 9px -2px rgba(184,184,184,1)",
    },
  },
  mapContainer: {
    width: "calc(100% - 400px)",
    height: "100%",
    position: "fixed",
    right: "0",
    background: "#ffffff",
    "z-index": "-5",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "calc(50% - 56px)",
      top: "112px",
    },
  },
  main: {
    backgroundColor: "#000",
  },
  dropdownButton: {
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
    verticalAlign: "text-bottom",
  },
  meta: {
    marginBottom: "16px",
  },
  filterBar: {
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },

  clearButton: {
    backgroundColor: "#aaa",
    "&:hover": {
      backgroundColor: "#aaa",
    },
    textTransform: "none",
    borderRadius: 0,
    marginRight: "10px",

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));
export default function StudiosMap() {
  const classes = useStyles();
  const [studios, setStudios] = useState([]);
  const [selectedStudio, setSelectedStudio] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [message, setMessage] = useState("Loading...");
  const [showClearFilterButton, setShowClearFilterButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchStudios({ minPrice, maxPrice });
        if (data.length === 0) {
          setMessage("No studios found");
        }
        setStudios(data);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
    const shouldShowClearButton = !!minPrice || !!maxPrice;
    setShowClearFilterButton(shouldShowClearButton);
  }, [minPrice, maxPrice]);

  const onChangePrice = (min, max) => {
    const [minVal, maxVal] = parseRange(min, max);
    setMinPrice(minVal);
    setMaxPrice(maxVal);
  };

  const onClearFilter = () => {
    setMinPrice(null);
    setMaxPrice(null);
  };

  return (
    <div className={classes.searchConatiner}>
      <Toolbar>
        <RangeSelectButton
          min={minPrice}
          max={maxPrice}
          defaultText="Select price"
          prefix="$"
          onChange={onChangePrice}
        />
        <RangeSelectButton
          // min={minPrice}
          // max={maxPrice}
          defaultText="Select distance"
          surfix="miles"
          // onChange={onChangePrice}
        />
        {showClearFilterButton && (
          <Button className={classes.clearButton} onClick={onClearFilter}>
            Clear filters <CloseIcon />
          </Button>
        )}
      </Toolbar>
      <Card className={classes.list}>
        <List className={classes.root}>
          {studios.length === 0 && (
            <ListItem>
              <ListItemText primary={message} />
            </ListItem>
          )}
          {studios.map((studio, idx) => (
            <React.Fragment key={studio.id}>
              {idx > 0 && <Divider component="li" />}
              <ListItem
                onClick={(event) => {
                  setSelectedStudio(studio);
                }}
                button
              >
                <ListItemText
                  component="div"
                  primary={studio.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        variant="caption"
                        color="textPrimary"
                        className={classes.meta}
                      >
                        $ {studio.price} per hour
                      </Typography>

                      <Typography
                        variant="caption"
                        display="block"
                        className={classes.meta}
                      >
                        <RoomIcon className={classes.inline} fontSize="small" />{" "}
                        {studio.address}
                      </Typography>

                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {studio.owner.name}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Box display="flex" justifyContent="flex-end" m={1} p={1}>
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
              </Box>
            </React.Fragment>
          ))}
        </List>
      </Card>

      <div className={classes.mapContainer}>
        <MapView studios={studios} selectedStudio={selectedStudio} />
      </div>
    </div>
  );
}
