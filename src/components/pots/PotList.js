import React, { useState, useEffect } from "react";
import PotCard from "./PotCard";
import API from "../../modules/fetch";

const PotList = (props) => {
  const [pots, setPots] = useState([]);
  
  useEffect(() => {
    
  }, [pots]);

  const getPots = () => {
  
    return API.getAllPots().then((potsFromAPI) => {
      setPots(potsFromAPI);
    });
  };
  
  useEffect(() => {
    getPots();
  }, []);

  return (
    <>
      <div className="container-cards">
        {pots.map((pot) => (
         
          <PotCard
            key={pot.id}
            pot={pot}
            {...props}
          />
          
        ))}
      </div>
      
        {/* <div id="searchBox">
          <input type="text" onChange={searching} placeholder="Search" />
          <PotList search={search}/>
        </div> */}
      
      {/* <input type="text" placeholder="Search" onChange={ e => setSearch(e.target.value)}/> */}
 
    </>
  );
};
export default PotList;