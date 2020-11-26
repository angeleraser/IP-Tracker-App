/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { ipTracker_SearchQuery } from "../../actions/ipTracker";
import { IpTrackerContext } from "../../App/App";
import { handleSetLatitudeAndLongitude } from "../../helpers/handleSetLatitudeLongitude";
import { LoadingMap } from "../LoadingMap/LoadingMap";
import { LoadingMapError } from "../LoadingMap/LoadingMapError";
export const GeoMap = () => {
  const {
    dispatch,
    ipTrackerState: {
      data: { coors },
      loading,
      error,
    },
  } = useContext(IpTrackerContext);

  // Fetch detault User's IP Address
  useEffect(() => {
    ipTracker_SearchQuery(dispatch, "");
  }, []);

  useEffect(() => {
    if (!loading && coors) {
      handleSetLatitudeAndLongitude(coors);
    }
  }, [loading, coors]);
  if (error) {
    return (
      <LoadingMapError msg="IP Address or domain not found, please provide a valid input." />
    );
  } else {
    return loading ? <LoadingMap /> : <div id="mapid"></div>;
  }
};
