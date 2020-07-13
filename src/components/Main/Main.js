import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import NavBar from './Landingpage/NavBar/NavBar';
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Container } from "react-bootstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleRegisterUser = this.handleRegisterUser.bind(this);
    this.state = {
      user: "",
      newUser: false
    };

  }

  handleSuccessfulAuth(data) {
    this.setState({
      user: data,
      newUser: false
    });
  }

  handleRegisterUser() {
    this.setState({
      newUser: true
    });
  }
  
  render() {
    const user = this.state.user;
    const newUser = this.state.newUser;
    return (
        <Container className="MainContainer">
          <NavBar></NavBar>
          { user === ""  && !newUser &&
              <Login handleRegisterUser={this.handleRegisterUser} handleSuccessfulAuth={this.handleSuccessfulAuth}></Login>
          }
          { user === ""  && newUser &&
              <Register handleSuccessfulAuth={this.handleSuccessfulAuth}></Register> 
          }
          { user !== "" &&
            <div> Aqui va la pagina principal</div>
          }
        </Container>
    );
  }
}
