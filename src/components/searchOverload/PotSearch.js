import React, { useEffect, useState } from "react";


const PotSearch = (props) => {
    const [searchInput, setSearchInput] = useState("")
    const handleFieldChange = (evt) => {
        
        setSearchInput(evt.target.value);
      };
  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          value={searchInput}
          onChange={handleFieldChange}
          placeholder="Key Word Search"
        />
        <button onClick={() => {
            props.getResults(searchInput)
        }}>Submit</button>
      </div>
    </>
  );
};

export default PotSearch;
