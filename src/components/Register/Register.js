import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.user.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    this.props.handleSuccessfulAuth(user);
  };

  render() {
    return (
      <div className="Register">
        <b> Sign Up</b>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="email">Username </label>
                  <input
                    autoFocus
                    type="text"
                    value={this.state.user}
                    onChange={this.handleChange}
                    required
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    required
                    name="password"
                    id="examplePassword"
                  />
                <input type="submit" value="Signup">
                </input>
              </form>
      </div>
    );
  }
}