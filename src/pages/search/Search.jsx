import React from "react";
import NavBar from "../browse/NavBar";
import SearchForm from "./SearchForm";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.box}>
      <NavBar />
      <SearchForm />
    </div>
  );
};

export default Search;
