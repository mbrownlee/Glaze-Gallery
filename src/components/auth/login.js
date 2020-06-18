import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./login.css";
import CreateUser from "./CreateUesr";
import API from "../../modules/fetch";

const Login = (props) => {
  const [potter, setPotter] = useState([]);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (credentials.email === "" || credentials.password === "") {
      window.alert("Please Login - email and password required");
    } else {
      API.getPotter(credentials).then((potter) => {
        if (credentials.email !== potter.email) {
          window.alert("No account. Create account.");
        } else {
          props.setPotter(potter.id);
          props.history.push("/pots");
        }
      });
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Container className="Login">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                onChange={handleFieldChange}
                type="email"
                name="email"
                id="email"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                onChange={handleFieldChange}
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </Container>
      <br />
      <Button id="new-btn" className="new-btn" onClick={toggle}>
        Or Create New Account
      </Button>
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modal-form">
          <ModalHeader className="create-new" toggle={toggle}>
            New Account Sign Up
          </ModalHeader>
          <ModalBody>
            <CreateUser toggler={toggle} />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default Login;
