import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "veronica@gmail.com",
      password: "123",
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const username= this.state;
    this.props.history.push("/");
  };

  handleRegisterUser = (event) => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="Login">
        <b> Sign In</b>
        <div className="justify-content-md-center">
              <form onSubmit={this.handleSubmit}>
                  <label for="username">Username</label>
                  <input
                    autoFocus
                    type="email"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    id="username"
                    name="username" />
                  <label for="password">Password</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    required
                    name="password"
                    id="password"/>
                <br/>
                <button block ml="10px" type="submit">
                  {" "}
                  Login{" "}
                </button>
              </form>
        </div>

        <div className="mt-3 text-center">
          <span className="mb-0">No tienes una cuenta? </span>
          <button
            ml="10px"
            variant="link"
            type="reset"
            onClick={this.handleRegisterUser}
          >
            {" "}
            Registrate{" "}
          </button>
        </div>
      </div>
    );
  }
}
