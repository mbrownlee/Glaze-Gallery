import React, { useState, useEffect } from 'react';
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/navbar/NavBar';
import './Pottery.css';
import API from './modules/fetch';
import PotSearch from './components/searchOverload/PotSearch';
import { Route } from 'react-router-dom';

function Pottery() {
  
  const [searchResults, setSearchResults] = useState([])

  const getResults = (searchInput) => {
    API.search(searchInput)
    .then(APIresults => {
      setSearchResults(APIresults)
     
    })
  }
 

  return (
    <>
      <NavBar />
      <Route
       render={(props) => {
          return <PotSearch getResults={getResults} {...props} />
        }}/>
      <ApplicationViews searchResults={searchResults} />
    </>
  );
}



export default Pottery;
