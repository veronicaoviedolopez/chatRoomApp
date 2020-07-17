import React, { Component } from 'react';
import './Register.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.user.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const {user, password} = this.state;
    this.props.handleSuccessfulAuth(user);
  }

  render() {
   return (
    <div className= "Register">
          <b> Sign Up</b>
     <Container className="justify-content-md-center">     
      <Row>
        <Col>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="user" >
            <Label for="email">Username</Label>
            <Input
              autoFocus
              type="text"
              value={this.state.user}
              onChange={this.handleChange}
              required
              id="email"
              name="email" 
              placeholder="email"/>
          </FormGroup>
          <FormGroup controlId="password" >
            <Label for="password">Password</Label>
            <Input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              required
              name="password"
              id="examplePassword" />
          </FormGroup>
          <Button block ml="10px" type="submit"> Signup </Button>          
        </Form>
       </Col>
      </Row>
      
    </Container>
    </div>
   );
  }
}