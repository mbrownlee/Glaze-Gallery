import React, { useState, useEffect } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import API from "../../modules/fetch";
import ImageSettings from "./ImageUpload";

const PotForm = (props) => {
  const [pot, setPot] = useState({
    potterId: "",
    name: "",
    preFireImg: "",
    finishedImg: "",
    clayId: "",
    techniqueId: "",
    decoration: "",
    firingEnvironmentId: "",
    firingSchedule: "",
    glaze1Id: "",
    glaze2Id: "",
    glaze3Id: "",
    glazeDetails: "",
    dateFinished: "",
  });
  const [clays, setClays] = useState([]);
  const [potter, setPotter] = useState([]);
  const [techniques, setTechniques] = useState([]);
  const [firingEnvironments, setFiringEnvironments] = useState([]);
  const [glazes, setGlazes] = useState([]);
  const [image, setImage] = useState("");

  const getClays = () => {
    return API.getClays().then((clays) => {
      setClays(clays);
    });
  };
  //   const getPotter = () => {
  //     return API.getPotter().then((potter) => {
  //       setPotter(potter);
  //     });
  //   };
  const getTechniques = () => {
    return API.getTechniques().then((techniques) => {
      setTechniques(techniques);
    });
  };
  const getFiringEnvironments = () => {
    return API.getFiringEnvironments().then((firingEnvironments) => {
      setFiringEnvironments(firingEnvironments);
    });
  };
  const getGlazes = () => {
    return API.getGlazes().then((glazes) => {
      setGlazes(glazes);
    });
  };
  useEffect(() => {
    getClays();
  }, []);
  //   useEffect(() => {
  //     getPotter();
  //   }, []);
  useEffect(() => {
    getFiringEnvironments();
  }, []);
  useEffect(() => {
    getGlazes();
  }, []);
  useEffect(() => {
    getTechniques();
  }, []);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...pot };
    stateToChange[evt.target.id] = evt.target.value;
    setPot(stateToChange);
  };

  const constructNewPot = (evt) => {
    const newPot = {
      potterId: "",
      name: pot.name,
      preFireImg: "",
      finishedImg: image,
      clayId: parseInt(pot.clayId),
      techniqueId: parseInt(pot.techniqueId),
      decoration: pot.decoration,
      firingEnvironmentId: parseInt(pot.firingEnvironmentId),
      firingSchedule: pot.firingSchedule,
      glaze1Id: parseInt(pot.glaze1Id),
      glaze2Id: parseInt(pot.glaze2Id),
      glaze3Id: parseInt(pot.glaze3Id),
      glazeDetails: pot.glazeDetails,
      dateFinished: pot.dateFinished,
    };
    API.createNew(newPot).then(() => props.history.push("/pots"));
  };

  const editedPot = {
    id: props.match.params.potId,
    name: pot.name,
    potterId: pot.potterId,
    preFireImg: pot.preFireImg,
    finishedImg: pot.finishedImg,
    clayId: pot.clayId,
    techniqueId: pot.techniqueId,
    decoration: pot.decoration,
    firingEnvironment: pot.firingEnvironment,
    firingSchedule: pot.firingSchedule,
    glaze1: pot.glaze1,
    glaze2: pot.glaze2,
    glaze3: pot.glaze3,
    glazeDetails: pot.glazeDetails,
    dateFinished: pot.dateFinished,
  };
  const updateExistingPot = (evt) => {
    API.updatePot(editedPot).then(() => props.history.push("/pots"));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.match.params.potId) {
      updateExistingPot(editedPot);
    } else if (!props.match.params.potId) {
      constructNewPot();
    }
  };
  useEffect(() => {
    if (props.match.params.potId) {
      API.getPot(props.match.params.potId).then(setPot);
    }
  }, []);

  return (
    <Form>
      <FormGroup row>
        <Label for="text" sm={2}>
          Name of Pot
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="text"
            name="name"
            id="name"
            placeholder="Descriptive name for pot"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="select" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="select"
            name="clayId"
            defaultValue={pot.clayId}
            id="clayId"
          >
            <option value="">Type of Clay</option>
            {clays.map((clay) => (
              <option key={clay.id} value={clay.id}>
                {clay.clay}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="select" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="select"
            name="techiqueId"
            defaultValue={pot.techniqueId}
            id="techniqueId"
          >
            <option value="">Form Technique</option>
            {techniques.map((technique) => (
              <option key={technique.id} value={technique.id}>
                {technique.technique}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="decoration" sm={2}>
          Decorations
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="text"
            name="decoration"
            id="decoration"
            placeholder="Describe embellishments (e.g. scraffito, faceting, underglaze)"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="select" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="select"
            name="glaze1Id"
            defaultValue={pot.glaze1Id}
            id="glaze1Id"
          >
            <option value="">Primary Glaze</option>
            {glazes.map((glaze) => (
              <option key={glaze.id} value={glaze.id}>
                {glaze.glaze}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="select" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="select"
            name="glaze2Id"
            defaultValue={pot.glaze2Id}
            id="glaze2Id"
          >
            <option value="">Second Glaze</option>
            {glazes.map((glaze) => (
              <option key={glaze.id} value={glaze.id}>
                {glaze.glaze}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="select" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="select"
            name="glaze3Id"
            defaultValue={pot.glaze3Id}
            id="glaze3Id"
          >
            <option value="">Third Glaze</option>
            {glazes.map((glaze) => (
              <option key={glaze.id} value={glaze.id}>
                {glaze.glaze}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="text" sm={2}>
          Glaze Details
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="textarea"
            name="text"
            id="glazeDetails"
          />
          <FormText color="black">
            Describe the order glazes were applied, number of coats, names of
            additional glazes used, brushed, dipped, etc.
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="select" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="select"
            name="firingEnvironmentId"
            defaultValue={pot.firingEnvironmentId}
            id="firingEnvironmentId"
          >
            <option value="">Firing Environment</option>
            {firingEnvironments.map((firingEnvironment) => (
              <option key={firingEnvironment.id} value={firingEnvironment.id}>
                {firingEnvironment.firingEnvironment}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="text" sm={2}></Label>
        <Col sm={10}>
          <Input
            onChange={handleFieldChange}
            type="text"
            name="firingSchedule"
            id="firingSchedule"
            placeholder="Firing Schedule (e.g. cone 5, 10 min hold"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="date" sm={2}>
          Date Complete
        </Label>
        <Col sm={6}>
          <Input
            onChange={handleFieldChange}
            type="date"
            name="date"
            id="dateFinished"
            placeholder="Date Pot Completed"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>
          File
        </Label>
        <Col sm={10}>
          {/* <Input type="file" name="finishedImg" id="finishedImg"  <ImageSettings /> /> */}  <ImageSettings type="file" name="finishedImg" id="finishedImg" setImage={setImage}/>

        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default PotForm;
