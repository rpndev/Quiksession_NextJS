import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles, Button, Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
    verticalAlign: "text-bottom",
  },
  meta: {
    marginBottom: "16px",
  },
}));

function MapView({ studios, google, selectedStudio, history }) {
  const classes = useStyles();
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showingInfoWindow, setShowingWindow] = useState(false);
  const [bounds, setBounds] = useState(null);
  const [activeStudio, setActiveStudio] = useState(false);

  const onClickMarker = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);

    setShowingWindow(true);
  };

  const onCloseInfoWindow = () => {
    setActiveMarker(null);
    setShowingWindow(false);
  };

  const onClickMap = () => {
    if (showingInfoWindow) {
      setShowingWindow(false);
    }
  };

  useEffect(() => {
    if (google) {
      let newBounds = new google.maps.LatLngBounds();
      for (let i = 0; i < studios.length; i++) {
        newBounds.extend(studios[i].location);
      }
      setBounds(newBounds);
    }

    if (activeStudio !== selectedStudio) {
      setActiveStudio(selectedStudio);
    }
  }, [studios, selectedStudio]);

  return (
    <Map
      className="map"
      google={google}
      onClick={onClickMap}
      center={activeStudio ? activeStudio.location : null}
      style={{ height: "100%", position: "relative", width: "100%" }}
      bounds={bounds}
    >
      {studios &&
        studios.map((studio) => (
          <Marker
            key={studio.id}
            studio={studio}
            onClick={onClickMarker}
            position={studio.location}
          />
        ))}
      <InfoWindow
        marker={activeMarker}
        onClose={onCloseInfoWindow}
        visible={showingInfoWindow}
      >
        {selectedPlace ? (
          <div>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.meta}
            >
              {selectedPlace.studio.name}
            </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.meta}
            >
              $ {selectedPlace.studio.price}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={classes.meta}
            >
              <RoomIcon className={classes.inline} fontSize="small" />{" "}
              {selectedPlace.studio.address}
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
              {selectedPlace.studio.owner.name}
            </Typography>
          </div>
        ) : (
          <div></div>
        )}
        {/* <Box display="flex" justifyContent="flex-end" m={1} p={1}>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => {
              console.log(selectedPlace.studio.id);
              e.preventDefault();
              history.push(`/bookings/${selectedPlace.studio.id}`);
            }}
          >
            Book
          </Button> */}
        {/* </Box> */}
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(MapView);
