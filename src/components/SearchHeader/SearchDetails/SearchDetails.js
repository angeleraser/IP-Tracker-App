import React, { useContext } from "react";
import { IpTrackerContext } from "../../../App/App";
import { LoadingCircle } from "../../../LoadingCircle/LoadingCircle";

export const SearchDetails = () => {
  const {
    ipTrackerState: {
      data: { ipAddress, location, timezone, isp },
      loading,
    },
  } = useContext(IpTrackerContext);
  return (
    <ul className="search-details">
      {loading ? (
        <li className="loading-details">
          <LoadingCircle />
        </li>
      ) : (
        <>
          {" "}
          <li className="search-details__item">
            <h3>Ip Address</h3>
            <span>{ipAddress || "N/A"}</span>
          </li>
          <li className="search-details__item">
            <h3>Location</h3>
            <span>{location || "N/A"}</span>
          </li>
          <li className="search-details__item">
            <h3>Timezone</h3>
            <span>UTC {`${timezone || "N/A"}`}</span>
          </li>
          <li className="search-details__item">
            <h3>ISP</h3>
            <span>{isp || "N/A"}</span>
          </li>
        </>
      )}
    </ul>
  );
};
