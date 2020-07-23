import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./LeftMenu.css";
import Photo from "../User/Photo";

const salas = [
  { name: "Sala de chat 1" },
  { name: "Sala de chat  2" },
  { name: "Sala de chat  3" },
  { name: "Sala de chat  4" },
];

function RoomList(props) {
  const salas = props.salas;
  const listItems = salas.map((sala, index) => (
    <li key={index}>
      <Link to="/room/">{sala.name}</Link>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

const LeftMenu = () => {
  return (
    <Router>
      <div>
        <Photo />
        <span className="tittle"> MENU </span>
        <nav>
          <ul>
            <li>
              <Link to="/user">Editar Perfil</Link>
            </li>
            <li>
              <Link to="/user">Change Password</Link>
            </li>
          </ul>
          <RoomList salas={salas} />
        </nav>
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
};

function User() {
  return <div>USER PROFILE PAGE THIS</div>;
}

export default LeftMenu;
