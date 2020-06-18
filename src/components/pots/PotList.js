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

//   const deleteAnimal = (id) => {
//     AnimalManager.delete(id).then(() =>
//       AnimalManager.getAll().then(setAnimals)
//     );
//   };
  useEffect(() => {
    getPots();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <div className="container-cards">
        {pots.map((pot) => (
          <PotCard
            key={pot.id}
            pot={pot}
            // deleteAnimal={deleteAnimal}
            {...props}
          />
        ))}
      </div>
      {/* <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
          }}
        >
          Admit New Animal
        </button>
      </section> */}
    </>
  );
};
export default PotList;