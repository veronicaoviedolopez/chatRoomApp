import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../Login/LoginRegister.css";
import { constants } from "../../config/constants";
import axios from 'axios';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  // Bindea los inputs con el estado
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  // Hace el Submit del Form
  handleSubmit = (event) => {
    event.preventDefault();


    axios.post(`${constants.api}user/create`, this.state)
    .then(() => {
      this.props.history.push("/");
    })
    .catch(err => console.log(err))
};

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-tittle">New User</div>
          <div className="form-row">
            <label htmlFor="name"> Name </label>
            <input
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
              id="name"
              name="name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email"> Email </label>
            <input
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              id="email"
              name="email"
              placeholder="email"
            />
          </div>

          <div className="form-row">
            <label htmlFor="password"> Password </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              required
              name="password"
              id="password"
            />
          </div>
          <div className="form-row">
            <button type="submit"> Sign Up </button>
          </div>
        </form>
        <div className="center">
          <label> Do you already have an account? </label>
          <Link className="link" to="/login">
            {" "}
            Log In{" "}
          </Link>
        </div>
      </div>
    );
  }
}


export default connect(Register);
