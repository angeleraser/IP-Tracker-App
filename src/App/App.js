import React, { createContext, useReducer } from "react";
import { GeoMap } from "../components/GeoMap/GeoMap";
import { SearchHeader } from "../components/SearchHeader/SearchHeader";
import {
  ipTrackerReducer,
  ipTracker_initialState,
} from "../reducers/ipTrackerReducer";
export const IpTrackerContext = createContext();
const App = () => {
  const [ipTrackerState, dispatch] = useReducer(
    ipTrackerReducer,
    ipTracker_initialState
  );

  const providerValue = {
    ipTrackerState,
    dispatch,
  };
  return (
    <IpTrackerContext.Provider value={providerValue}>
      <SearchHeader />
      <GeoMap />
    </IpTrackerContext.Provider>
  );
};

export default App;
