import React, { useEffect, useState} from "react";
import PotList from "./PotList";
import API from "../../modules/fetch";

const Search = () => {
    const [search, setSearch] = useState([])
  
    const getResults = () => {
        const stateToChange = { ...search }
        API.search(searchInput)
        .then(results => {
          stateToChange.results = results
          setSearch(stateToChange)
        })
      }

      useEffect( () => {

      }, [search])
  
    return (
      
        <div id="searchBox">
          <Input type="text" onChange={getResults} placeholder="Search" />
          <PotList search={search}/>
        </div>
      
    )
  }
  
  export default Search

