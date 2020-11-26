import { ipTrackerTypes } from "../types/types";

export const ipTracker_initialState = {
  data: {},
  loading: false,
  error: null,
};

export const ipTrackerReducer = (
  state = ipTracker_initialState,
  { type, payload }
) => {
  switch (type) {
    case ipTrackerTypes.SearchQuery:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ipTrackerTypes.SaveResponse:
      return {
        ...state,
        data: payload,
      };
    case ipTrackerTypes.FinishSearch:
      return {
        ...state,
        loading: false,
      };
    case ipTrackerTypes.SetFetchError:
      return {
        ...state,
        data: {},
        error: payload,
      };
    default:
      return state;
  }
};
