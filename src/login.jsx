import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, FormText, Label, Input,
  Button,
} from 'reactstrap';
import './css/login.css';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> master

class Login extends Component {
  render() {
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
            <FormText>Your username is most likely your email.</FormText>
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
          <br/>
          <br/>
          <div>Didn't <Link to="/register"> Register</Link> Yet?</div>
        </Form>
      </Container>
    );
  }
}

export default Login;
