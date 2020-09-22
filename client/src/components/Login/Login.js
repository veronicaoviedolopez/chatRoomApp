import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { Redirect } from "react-router-dom";

import { setCurrentUser } from "../../redux/actions/usersAction";
import { constants } from "../../config/constants";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { addUserSession } from "../../helpers/userSessionInfo";
import { Link } from "react-router-dom";
import {initSocket} from '../../helpers/sockets'
import "react-toastify/dist/ReactToastify.css";
import "./LoginRegister.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "123456",
    };
  }

  addUserTochatRoom = (userid) => axios.get(`${constants.api}invite/user/${userid}/chatroom/${this.props.match.params.roomid}`)

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
        let { chatRooms, ...other } = response.data.user;
         addUserSession(response.data.token);
        if(this.props.match.params?.iduser || this.props.match.params?.roomid){
          this.addUserTochatRoom(other._id).then((res) => {
            toast.success("User added to chatroom");
            chatRooms.push(res.data);
            this.props.setCurrentUser({
              token: response.data.token,
              chatRooms,
              user: other,
            });
            initSocket();
            toast.success("User Logged Succesfuly");
            return this.props.history.push("/");
          })
          .catch(() => {}); 
        }
        else{
          this.props.setCurrentUser({
            token: response.data.token,
            chatRooms,
            user: other,
          });
          initSocket();
          toast.success("User Logged Succesfuly");
          return this.props.history.push("/");
        }
      })
      .catch((err) => toast.error(err.response?.data));
  };

  render() {
    if (this.props.isAuth === true) {
      return <Redirect to='/' />
    }

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

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth
  };
};
const mapDispatchToProps = {
  setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
