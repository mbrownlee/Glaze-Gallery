import React, { useState } from "react";


const PotSearch = (props) => {
    const [searchInput, setSearchInput] = useState("")
    const handleFieldChange = (evt) => {
        
        setSearchInput(evt.target.value);
      };
  return (
    <>
      <div className="searchBox">
        <input
        className="searchInputBar"
          type="text"
          value={searchInput}
          onChange={handleFieldChange}
          placeholder="Key Word Search"
        />
        <button className="search-btn" onClick={() => {
            props.getResults(searchInput)
        }}>Search</button>
      </div>
    </>
  );
};

export default PotSearch;
