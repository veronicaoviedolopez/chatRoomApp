import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
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
    const { username} = this.state.username;
    this.props.history.push("/");
  };

  handleRegisterUser = (event) => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="Login">
        <b> Sign In</b>
        <Container className="justify-content-md-center">
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    autoFocus
                    type="email"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    id="username"
                    name="username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    required
                    name="password"
                    id="password"
                  />
                </FormGroup>
                <Button block ml="10px" type="submit">
                  {" "}
                  Login{" "}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        <div className="mt-3 text-center">
          <span className="mb-0">No tienes una cuenta? </span>
          <Button
            ml="10px"
            variant="link"
            type="reset"
            onClick={this.handleRegisterUser}
          >
            {" "}
            Registrate{" "}
          </Button>
        </div>
      </div>
    );
  }
}
