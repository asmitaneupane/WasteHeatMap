import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, FormText, Label, Input,
  Button,
} from 'reactstrap';
import './css/register.css';

class Register extends Component {
  render() {
    return (
      <Container className="Register">
        <h2>Sign Up</h2>
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
                placeholder="Enter your password here"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Reenter your password"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
        <h4>Already have an account?</h4>
        <Button variant="primary" size="lg" block>
                    Sign In
        </Button> 
      </Container>
    );
  }
}

export default Register;
