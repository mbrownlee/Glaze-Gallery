import React, { useEffect, useState } from "react";
import API from "../../modules/fetch";
import PotCard from "../pots/PotCard";


const MyPotList = (props) => {
  const [pots, setMyPots] = useState([]);

  useEffect(() => {
    API.getPotsByPotter(props.match.params.potterId).then(
      (APIResults) => {
        setMyPots(APIResults);
      }
    );
  }, []);
  return (
    <>
      <section className="section-content">
          
      </section>
      <section className="section-content">
        <button
          type="button"
          className="add-btn"
          onClick={() => {
            props.history.push("/pots/new");
          }}
        >
          Add New Pot
        </button>
      </section>
      <div className="container-cards">
        {pots.map((pot) => (
          <PotCard key={pot.id} pot={pot} {...props} />
        ))}
      </div>
    </>
  );
};
export default MyPotList;