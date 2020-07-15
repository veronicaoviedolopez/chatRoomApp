import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Header from './Landingpage/Header/Header';
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Container } from "reactstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleRegisterUser = this.handleRegisterUser.bind(this);
    this.state = {
      username: "",
      newUser: false
    };

  }

  handleSuccessfulAuth(data) {
    this.setState({
      username: data,
      newUser: false
    });
  }

  handleRegisterUser() {
    this.setState({
      newUser: true
    });
  }
  
  render() {
    const username = this.state.username;
    const newUser = this.state.newUser;
    return (
        <Container className="MainContainer">
          { username === ""  && !newUser &&
              <Login handleRegisterUser={this.handleRegisterUser} handleSuccessfulAuth={this.handleSuccessfulAuth}></Login>
          }
          { username === ""  && newUser &&
              <Register handleSuccessfulAuth={this.handleSuccessfulAuth}></Register> 
          }
          { username !== "" &&
          
            <div>
              <Header></Header>
               Aqui va la pagina principal</div>
          }
        </Container>
    );
  }
}
