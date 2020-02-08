import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from "reactstrap";
import { PostData } from "./PostData";
import "./css/login.css";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then(result => {
        let responseJSON = result;
        if (responseJSON.userData) {
          sessionStorage.setItem("userData", responseJSON);
          this.setState({ redirect: true });
        } else {
          console.log("Login Error");
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/homepage"} />;
    }
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
                onChange={this.onChange}
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
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Button onClick={this.login}>Submit</Button>
          <br />
          <br />
          <div>
            Didn't <Link to="/register"> Register</Link> Yet?
          </div>
        </Form>
      </Container>
    );
  }
}

export default Login;
