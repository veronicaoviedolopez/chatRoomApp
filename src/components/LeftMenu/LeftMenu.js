import React from "react";
import { Link } from "react-router-dom";
import "./LeftMenu.css";

function RoomList(props) {
  console.log(props.chatRooms);
  const listItems = props.chatRooms.map((sala, index) => (
    <li key={index}>
      <Link to="#">{sala.name}</Link>
    </li>
  ));
  return <ul className="navSalas">{listItems}</ul>;
}

const LeftMenu = (props) => {
  return (
    <div className="container">
      <div className="navMenu">
        <div className="datosUser">
          <img src="/img/user-avatar.jpg" alt="" className="photo" />
          <span> {props.user} </span>
        </div>
        <br />
        <div className="tittle">
          <span> MENU </span>
        </div>
        <nav>
          <ul className="navMenu">
            <li>
              <Link className="link" to="/">
                Editar Usuario
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Cambiar Contraseña
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="tittle">
          <span> SALAS DE CHAT </span>
          <Link className="link" to="/">
            {" "}
            +{" "}
          </Link>
        </div>
        <nav>
          <RoomList chatRooms={props.chatRooms} />
        </nav>
      </div>

      <div className="padding-bottom">
        <div className="tittle">
          <span> USUARIOS </span>
          <div className="add">
            <Link className="link" to="/">
              {" "}
              +{" "}
            </Link>
          </div>
        </div>

        <nav>
          <ul className="navUsers">
            {props.users.map((u, index) => (
              <li key={index}>
                <Link to="/">{u.username}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
