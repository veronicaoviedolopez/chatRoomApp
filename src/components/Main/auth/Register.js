import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, FormText, Row, Col } from "react-bootstrap";
import './auth.css';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    <div className= "Login">
          <b> Sign Up</b>
     <Container className="justify-content-md-center">     
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="user" >
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.user}
              onChange={this.handleChange}
              required/>
          </FormGroup>
          <FormGroup controlId="password" >
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              required
              aria-describedby="passwordHelpBlock"/>
              <FormText id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers, and
                must not contain spaces, special characters, or emoji.
              </FormText>
          </FormGroup>
          <Button block ml="10px" type="submit"> Create Account </Button>          
        </form>
       </Col>
      </Row>
      
    </Container>
    </div>
   );
  }
}