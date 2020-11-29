import React, { useContext } from "react";
import { iconArrow } from "../../../assets/svg/svg";
import { useForm } from "../../../hooks/useForm";
import { IpTrackerContext } from "../../../App/App";
import { ipTracker_SearchQuery } from "../../../actions/ipTracker";
import { LoadingCircle } from "../../../LoadingCircle/LoadingCircle";
const initState = { query: "" };
const SearchForm = () => {
  const {
    dispatch,
    ipTrackerState: { loading },
  } = useContext(IpTrackerContext);
  const [{ query }, handleInputChange, resetForm] = useForm(initState);
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    ipTracker_SearchQuery(dispatch, query);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="search-ip">
        <input
          name="query"
          id="search-ip"
          onChange={handleInputChange}
          value={query}
          placeholder="Search for any IP address or domain"
          type="text"
        />
      </label>
      <button aria-label="Submit Button" disabled={loading} className="btn-submit">
        {loading ? <LoadingCircle /> : iconArrow}
      </button>
    </form>
  );
};

export default SearchForm;
