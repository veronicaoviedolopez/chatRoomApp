import React from "react";
import "./App.css";
import Header from './components/Main/Landingpage/Header/Header';
import Photo from './components/Main/Profile/Photo';
import Menu from './components/Main/Landingpage/Menu/Menu';
import Main from './components/Main/Main';
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const salas = [
  { name: "Sala de chat 1" },
  { name: "Sala de chat  2" },
  { name: "Sala de chat  3" },
  { name: "Sala de chat  4" },
];

function RoomList(props) {
  const salas = props.salas;
  const listItems = salas.map((sala, index) => 
    //<li>{sala.name}</li>
    <li>
      <Link to="/room/{{index}}">{sala.name}</Link>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  return (
    <Container>
      {/* <Main></Main> */}
      <Row>
        <Col> <Header></Header></Col>
      </Row>
      <Row>
        <Col xs="4" className="p-2">
          <Photo></Photo>
          <Menu></Menu>
          <Router>
            <div>
              <nav>
                  <RoomList salas={salas} />
              </nav>
               {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>        
            </div>
          </Router>
        </Col>
        <Col xs="6" className="p-2">.col-6</Col>
      </Row>
    </Container>

  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;