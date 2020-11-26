import React from "react";
import { SearchDetails } from "./SearchDetails/SearchDetails";
import SearchForm from "./SearchForm/SearchForm";
export const SearchHeader = () => {
  return (
    <div className="search-header">
      <h1>IP Address Tracker</h1>
      <SearchForm />
      <SearchDetails />
    </div>
  );
};
