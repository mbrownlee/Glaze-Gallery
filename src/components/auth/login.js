import React from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
  import "./login.css"

const Login = (props) => {
    // const [credentials, setCredentials] = useState({
    //   username: "",
    //   password: "",
    // });
  
    return (
      <Container className="Login">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }

  export default Login