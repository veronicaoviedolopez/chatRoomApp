import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Login/LoginRegister.css";
import { constants } from "../../config/constants";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
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
    axios
      .post(`/api/user/create`, this.state)
      .then(() => {
        toast.success("User Created Succesfuly");
        this.props.history.push("/login");
      })
      .catch((err) => toast.error(err.response?.data));
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-tittle">Sign Up</div>
          <div className="form-row">
            <label htmlFor="name"> User name </label>
            <input
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              required
              id="username"
              name="username"
              maxLength="20"
            />
          </div>

          <div className="form-row">
            <label htmlFor="firstname"> First name </label>
            <input
              autoFocus
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange}
              required
              id="firstname"
              name="firstname"
              maxLength="20"
            />
          </div>

          <div className="form-row">
            <label htmlFor="lastname"> 
              Last name 
            </label>
            <input
              autoFocus
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
              required
              id="lastname"
              name="lastname"
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
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <label> 
            Do you already have an account? 
          </label>
          <Link className="out_link linkHover" to="/login">
            Log In
          </Link>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default Register;
