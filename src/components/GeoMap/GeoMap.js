import React, { useContext, useEffect } from "react";
import { ipTracker_SearchQuery } from "../../actions/ipTracker";
import { IpTrackerContext } from "../../App/App";
import { useMap } from "../../hooks/useMap";
export const GeoMap = () => {
  const {
    dispatch,
    ipTrackerState: {
      data: { coors = [0, 0] },
    },
  } = useContext(IpTrackerContext);
  const [,] = useMap(coors);
  useEffect(() => {
    ipTracker_SearchQuery(dispatch, "");
  }, [dispatch]);
  return <div id="mapid"></div>;
};
