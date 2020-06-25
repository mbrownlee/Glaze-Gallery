import React, { useState, useEffect } from "react";
import PotCard from "./PotCard";
import { Row } from "reactstrap";
import API from "../../modules/fetch";

const PotList = (props) => {
  const [pots, setPots] = useState([]);

  useEffect(() => {}, [pots]);

  const getPots = () => {
    return API.getAllPots().then((potsFromAPI) => {
      function shuffle(potsFromAPI) {
        let currentIndex = potsFromAPI.length,
          temporaryValue,
          randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = potsFromAPI[currentIndex];
          potsFromAPI[currentIndex] = potsFromAPI[randomIndex];
          potsFromAPI[randomIndex] = temporaryValue;
        }
        return potsFromAPI;
      }
      shuffle(potsFromAPI);
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
            <PotCard key={pot.id} pot={pot} {...props} />
          ))}
        </Row>
      </div>
    </>
  );
};
export default PotList;
