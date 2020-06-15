import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../modules/fetch";
import "./login.css";

const CreateUser = (props) => {
  //   const {
  //     buttonLabel,
  //     className
  //   } = props;
  const [potter, setPotter] = useState({
    artistName: "",
    email: "",
    password: ""
  });
  const [modal, setModal] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...potter };
    stateToChange[evt.target.id] = evt.target.value;
    setPotter(stateToChange);
  };
  const newPotter = (evt) => {
    // debugger;
    evt.preventDefault();
    if (
      potter.artistName === "" ||
      potter.email === "" ||
      potter.password === ""
    ) {
      window.alert("All fields required. Please complete form.");
    } else {
      const thePotter = {
        name: potter.artistName,
        email: potter.email,
        password: potter.password,
      };
      API.createNew(thePotter).then((props.toggler));
    }
  };
 
  const toggle = () => setModal(!modal);

  return (
    <div className="form-container">
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Artist's Name</Label>
            <Input
              type="text"
              name="name"
              id="artistName"
              onChange={handleFieldChange}
              placeholder="Your Name or Studio Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              email="email"
              id="email"
              onChange={handleFieldChange}
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              password="password"
              id="password"
              onChange={handleFieldChange}
              placeholder="********"
            />
          </FormGroup>
        </Col>
      </Form>
      <Button onClick={(toggle, newPotter)}>Create Account</Button>{" "}
    </div>
  );
};

export default CreateUser;
