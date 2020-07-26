import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../Login/LoginRegister.css";
import { setCurrentUser } from "../../state/actions/usersAction";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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

    const user = { 
      username: this.state.username, 
      email: this.state.email
    }
    this.props.setCurrentUser(user);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-tittle">Nuevo Usuario</div>
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

const mapDispatchToProps = {
  setCurrentUser
};


export default connect(null,mapDispatchToProps)(Register);
