import React, { useState } from "react";
import ApplicationViews from "./components/ApplicationViews";
import NavBar from "./components/navbar/NavBar";
import "./Pottery.css";
import API from "./modules/fetch";
import PotSearch from "./components/searchOverload/PotSearch";
import { Route } from "react-router-dom";

function Pottery(props) {
  const checkAuthenticated = () => {
    if (localStorage.getItem("currentPotter") !== null) {
      return true;
    } else {
      return false;
    }
  };
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuthenticated());
  const [searchResults, setSearchResults] = useState([]);

  const getResults = (searchInput) => {
    API.search(searchInput).then((APIresults) => {
      setSearchResults(APIresults);
      props.history.push("/search_results");
    });
  };

  return (
    <>
      <NavBar setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated && (
        <Route
          render={(props) => {
            return <PotSearch getResults={getResults} {...props} />;
          }}
        />
      )}
      <ApplicationViews
        setIsAuthenticated={setIsAuthenticated}
        searchResults={searchResults}
      />
    </>
  );
}

export default Pottery;
