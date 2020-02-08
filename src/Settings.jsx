import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './css/settings.css';


class Settings extends Component {
    render() {
        return (
            <div>
                <center>Settings</center>
                <Container className="Login">
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="myemail@email.com" disabled
                                />
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
                                <Label >Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="Password"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                       <center><Button color="primary">Signout</Button></center> 

                    </Form>
                </Container>
            </div >
        )
    }





};
export default Settings;