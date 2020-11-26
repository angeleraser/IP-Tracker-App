import { getEndpointByQuery } from "../helpers/getEndpointByQuery";
import { ipTrackerTypes } from "../types/types";
export const ipTracker_SearchQuery = async (dispatch, query = "") => {
  try {
    console.log("Fetching info...");
    dispatch({ type: ipTrackerTypes.SearchQuery });
    const response = await fetch(getEndpointByQuery(query));
    const body = await response.json();
    console.log("Fetch success!", body);
    if (body.ip) {
      const {
        ip,
        location: { region, city, lat, lng, postalCode, timezone },
        isp,
      } = body;
      const parsedBody = {
        ipAddress: ip,
        location: `${region}, ${city} ${postalCode}`,
        coors: [lat, lng],
        timezone,
        isp,
      };
      dispatch(ipTracker_SaveResponse(parsedBody));
    } else {
      dispatch(ipTracker_SetFetchError(body.messages));
    }
  } catch (error) {
    console.error(error);
    dispatch(ipTracker_SetFetchError(error));
  } finally {
    dispatch({ type: ipTrackerTypes.FinishSearch });
  }
};

const ipTracker_SaveResponse = (response) => ({
  type: ipTrackerTypes.SaveResponse,
  payload: response,
});

const ipTracker_SetFetchError = (error) => ({
  type: ipTrackerTypes.SetFetchError,
  payload: error,
});
