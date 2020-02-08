import React, { Component } from "react";
import {
<<<<<<< HEAD
  Container,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import "./css/register.css";
=======
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/register.css';
>>>>>>> 389f8aff495783a931424d67cb9a3740b596214d

class Register extends Component {
  render() {
    return (
      <Container className="Register">
        <center>
          <h2>Sign Up</h2>
        </center>
        <Form className="form" method="get">
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
              <Label for="">First Name</Label>
              <Input
                type="text"
                name="fname"
                id="firstname"
                placeholder="Enter your First Name here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="">Last Name</Label>
              <Input
                type="text"
                name="lname"
                id="lastname"
                placeholder="Enter lastname"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="">Address</Label>
              <Input
                type="text"
                name="address"
                id="Address"
                placeholder="Enter your Address here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="">Phone</Label>
              <Input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter your Phone Here"
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
                placeholder="Enter your password here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>

              <Input
                type="password"
                name="cpassword"
                id="examplePassword"
                placeholder="Confirm your password"
              />
            </FormGroup>
          </Col>
          <center>
            <Button color="Primary" id="register">
              Register
            </Button>
          </center>
        </Form>
        <center>
          <h4>Already have an account?</h4>
          <Link to="/login"> Sign In </Link>
        </center>
      </Container>
    );
  }
}

export default Register;
