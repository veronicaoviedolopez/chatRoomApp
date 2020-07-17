import React, { Component } from "react";
// Components
import Header from "../Header/Header";
import Photo from '../User/Photo';
import LeftMenu from '../LeftMenu/LeftMenu';
import { Container, Row, Col } from "reactstrap";

const salas = [
  { name: "Sala de chat 1" },
  { name: "Sala de chat  2" },
  { name: "Sala de chat  3" },
  { name: "Sala de chat  4" },
];

function RoomList(props) {
  const salas = props.salas;
  const listItems = salas.map((sala, index) => (
    //<li>{sala.name}</li>
    <li>
      <a href="/room/{{index}}">{sala.name}</a>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default class Main extends Component {
  render() {
    return (
      <Container>
        {/* <Main></Main> */}
        <Row>
          <Col>
            {" "}
            <Header></Header>
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="p-2">
            <Photo></Photo>
            <LeftMenu></LeftMenu>
            <div>
              <nav>
                <RoomList salas={salas} />
              </nav>
            </div>
          </Col>
          <Col xs="6" className="p-2">
            .col-6
          </Col>
        </Row>
      </Container>
    );
  }
}

function Users() {
  return <h2>Users</h2>;
}
