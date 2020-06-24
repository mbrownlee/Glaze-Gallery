import React, { useState, useEffect } from "react";
import API from "../../modules/fetch";

const PotDetail = (props) => {
  const currentPotter = localStorage.getItem("currentPotter")
  const [pot, setPot] = useState({
    potterId: "",
    name: "",
    preFireImg: "",
    finishedImg: "",
    clayId: "",
    techniqueId: "",
    decoration: "",
    firingEnvironment: {},
    firingSchedule: "",
    glaze1Id: "",
    glaze2Id: "",
    glaze3Id: "",
    glazeDetails: "",
    dateFinished: "",
    clay: {},
    potter: {},
    technique: {},
    glaze1: {},
    glaze2: {},
    glaze3: {}
  });


  const handleDelete = () => {
    
    API.deletePot(props.match.params.potId).then(() => {
      props.history.push("/pots")
    });
  };
  useEffect(() => {
    let potObj = {};
    API.getPotWithDetails(props.match.params.potId)
      .then((result) => {
        console.log(result, "clay");
        potObj = result;
      })
      .then(() => API.getGlaze(potObj.glaze1Id))
      .then((result) => {
        potObj.glaze1 = result;
      })
      .then(() => API.getGlaze(potObj.glaze2Id))
      .then((result) => {
        potObj.glaze2 = result;
      })
      .then(() => API.getGlaze(potObj.glaze3Id))
      .then((result) => {
        potObj.glaze3 = result;
        setPot(potObj);
      });
  }, [props.match.params.potId]);



  return (
    <div className="card">
      <div className="card-content">
        <h1>My Pot</h1>
        <h3>Pot Name: {pot.name}</h3>
        <p>Artist: {pot.potter.artistName}</p>
        <p>Clay: {pot.clay.clay}</p>
        <p>Technique: {pot.technique.technique}</p>
        <p>Decorative enhancements: {pot.decoration}</p>
        <p>Firing Environment: {pot.firingEnvironment.firingEnvironment}</p>
        <p>Firing Schedule: {pot.firingSchedule}</p>
        <p>Primary Glaze: {pot.glaze1.glaze}</p>
        <p>Second Glaze: {pot.glaze2.glaze}</p>
        <p>Third Glaze: {pot.glaze3.glaze}</p>
        <p>Glaze Details: {pot.glazeDetails}</p>
        <p>Date Completed: {pot.dateFinished}</p>
        <p>
          Glazed Pot before firing:{" "}
          <img className="donePot" src={pot.preFireImg} />
        </p>
        <p>
          Completed Pot: <img className="donePot" src={pot.finishedImg} />
        </p>

        {/* <p>Keep details private or share with community?: {pot.Private}</p>   */}
      
       
        <div className="edit">
        {currentPotter === pot.potterId ? 
          <button
            type="button"
            onClick={() => props.history.push(`/pots/${pot.id}/edit`)}
          >
            Update Pot
          </button> : null }
        </div>
        <div className="delete">
        {currentPotter === pot.potterId ?
          <button type="button" onClick={handleDelete}>
            Delete Pot
          </button> : null }
        </div>
      </div>
    </div>
  );
};

export default PotDetail;
