import React, { useContext } from "react";
import { iconArrow } from "../../../assets/svg/svg";
import { useForm } from "../../../hooks/useForm";
import { IpTrackerContext } from "../../../App/App";
import { ipTracker_SearchQuery } from "../../../actions/ipTracker";
const initState = { query: "" };
const SearchForm = () => {
  const { dispatch } = useContext(IpTrackerContext);
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
          onChange={handleInputChange}
          value={query}
          placeholder="Search for any IP address or domain"
          type="text"
        />
      </label>
      <button>{iconArrow}</button>
    </form>
  );
};

export default SearchForm;
