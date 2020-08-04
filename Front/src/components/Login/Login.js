import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import { loginUser } from "../../state/actions/usersAction";

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
    
    const currentUser =  {
      name: this.state.username,
      password: this.state.password
    };
    
    this.props.loginUser(currentUser);
    this.props.history.push("/");
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
  loginUser
};

export default connect(null, mapDispatchToProps)(Login);
