import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import axios from "axios";
import { setCurrentUser } from "../../redux/actions/usersAction";
import { constants } from "../../config/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setChatRooms } from "../../redux/actions/chatRoomAction";
import jwt from "jsonwebtoken";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${constants.api}auth/login`, this.state)
      .then(response => {
        console.log('entro al response')
        // decodear el jwt
        const user = jwt.decode(response.data);
        this.props.setCurrentUser(user);
        this.props.setChatRooms("arreglo de las salas");
        // set auth token
        toast.success("User Logged Succesfuly");
        return this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        return toast.error(err.response.data);}
      );
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-tittle">Log In</div>
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
              placeholder="name"
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
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="center">
          <label> Do you don't have an account? </label>
          <Link className="link" to="/register">
            {" "}
            Sign Up{" "}
          </Link>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser,
  setChatRooms
};


export default connect(null, mapDispatchToProps)(Login);
