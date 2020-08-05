import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import axios from "axios";
import { setCurrentUser } from '../../state/actions/usersAction';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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
    
    axios.post("http://localhost:3000/api/user/register", this.state)
      .then(response => {
        this.props.setCurrentUser(response.data)
        this.props.history.push("/");
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-tittle"> 
            Log In 
          </div>
          <div className="form-row">
            <label htmlFor="username"> Username </label>
            <input
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              required
              id="username"
              name="username"
              placeholder="username"
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
          <Link className="link" to="/register"> Sign Up </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(null, mapDispatchToProps)(Login);
