import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Container, Col, Form,
    FormGroup, Label, Input } from 'reactstrap';
import "./login.css"
import CreateUser from './CreateUesr';

const Login = (props) => {
    // const [credentials, setCredentials] = useState({
    //   username: "",
    //   password: "",
    // });
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
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
      <br/>
      <Button id="new-btn" className="new-btn" onClick={toggle}>Or Create New Account</Button>
        <div>
          
          <Modal isOpen={modal} toggle={toggle} className="modal-form">
            <ModalHeader className="create-new" toggle={toggle}>New Account Sign Up</ModalHeader>
            <ModalBody>
            <CreateUser toggler={toggle} />
            
            </ModalBody>
           
          </Modal>
        </div>
      
    </>
    );
  }

  export default Login