import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, FormText, Row, Col } from "react-bootstrap";
import './auth.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterUser = this.handleRegisterUser.bind(this);
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
    const {user} = this.state;
    this.props.handleSuccessfulAuth(user);
  }

  handleRegisterUser = event => {
    this.props.handleRegisterUser();
  }

  render() {
   return (
    <div className= "Login">
          <b> Sign In</b>
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
              required />
          </FormGroup>
          <Button block ml="10px" type="submit"> Login </Button>          
        </form>
       </Col>
      </Row>
    </Container>

    <div  className="mt-3 text-center">
               <span className="mb-0">No tienes una cuenta?    </span>
               <Button ml="10px" variant="link" type="reset" onClick={this.handleRegisterUser}> Registrate </Button>   
          </div>
    </div>
   );
  }
}