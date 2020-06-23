import React, { useEffect, useState } from "react";
import PotCard from "../pots/PotCard";

const SearchResults = (props) => {
  return (
    <>
      <div className="container-cards">
        {props.searchResults.map((pot) => (
          <PotCard key={pot.id} pot={pot} {...props} />
        ))}
      </div>

    
    </>
  );
};
export default SearchResults;
