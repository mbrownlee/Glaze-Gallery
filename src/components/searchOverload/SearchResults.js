import React from "react";
import PotCard from "../pots/PotCard";
import {
    Row,
  } from "reactstrap";

const SearchResults = (props) => {
  return (
    <>
      <div className="container-cards">
      <Row sm="4">
        {props.searchResults.map((pot) => (
          <PotCard key={pot.id} pot={pot} {...props} />
        ))}
        </Row>
      </div>

    
    </>
  );
};
export default SearchResults;
