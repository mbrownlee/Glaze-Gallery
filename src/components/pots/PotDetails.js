import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import API from "../../modules/fetch";

const PotDetail = (props) => {
  const currentPotter = parseInt(localStorage.getItem("currentPotter"))
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
    <Container>
    <div className="cardDetail">
      <div className="detailContent">
    <Row>
    <Col>
        <h1>Pot Details</h1>
        <h3>{pot.name}</h3>
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
        </Col>
        <Col className="image-col">
        <section className="detail-img">
          Pre-Fired:
          <img className="donePot" src={pot.preFireImg} />
        </section>
        <section className="detail-img">
          Completed Pot: <img className="donePot" src={pot.finishedImg} />
        </section>
        </Col>
        
      </Row>
      
       <Row>
       <Col xs="6" sm="4">
        <div className="edit">
        {currentPotter === pot.potterId ? 
          <button
          className="edit-btn"
            type="button"
            onClick={() => props.history.push(`/pots/${pot.id}/edit`)}
          >
            Edit Details
          </button> : null }
        </div>
        </Col>
        <Col xs="6" sm="4">
        <div className="delete">
        {currentPotter === pot.potterId ?
          <button className="delete-btn" type="button" onClick={handleDelete}>
            Delete Pot
          </button> : null }
        </div>
        </Col>
</Row>
      </div>
    </div>
    </Container>
  );
};

export default PotDetail;
