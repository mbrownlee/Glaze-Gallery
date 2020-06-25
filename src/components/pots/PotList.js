import React, { useState, useEffect } from "react";
import PotCard from "./PotCard";
import {
  Row,
} from "reactstrap";
import API from "../../modules/fetch";

const PotList = (props) => {
  const [pots, setPots] = useState([]);
  
  useEffect(() => {
    
  }, [pots]);

  const getPots = () => {
  
    return API.getAllPots().then((potsFromAPI) => {
      console.log(potsFromAPI, "potsfromApi")
      setPots(potsFromAPI);
    });
  };
  
  useEffect(() => {
    getPots();
  }, []);

  return (
    <>
    
      <div className="container-cards">
      <Row sm="4">
        {pots.map((pot) => (
         
          <PotCard
            key={pot.id}
            pot={pot}
            {...props}
          />
          
        ))}
        </Row>
      </div>
      
 
    </>
  );
};
export default PotList;