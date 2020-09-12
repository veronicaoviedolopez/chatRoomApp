import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setCurrentUser } from "../../redux/actions/usersAction";
import { constants } from "../../config/constants";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { addUserSession } from "../../helpers/userSessionInfo";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./LoginRegister.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "vero",
      password: "123456",
    };
  }

  // Bindea los inputs con el estado
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  // Hace el Submit del Form
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${constants.api}auth/login`, this.state)
      .then((response) => {
        const { chatRooms, ...other } = response.data.user;
        this.props.setCurrentUser({
          token: response.data.token,
          chatRooms,
          user: other,
        });
        addUserSession(response.data.token);
        toast.success("User Logged Succesfuly");
        return this.props.history.push("/");
      })
      .catch((err) => toast.error(err.response?.data));
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-tittle">Log In</div>
          <div className="form-row">
            <label htmlFor="username"> User name </label>
            <input
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              required
              id="username"
              name="username"
              placeholder="username"
              maxLength="20"
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
              maxLength="20"
            />
          </div>
          <div className="form-row">
            <button className="linkHover" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="center">
          <label> Do you don't have an account? </label>
          <Link className="out_link linkHover" to="/register">
            Sign Up
          </Link>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(null, mapDispatchToProps)(Login);
