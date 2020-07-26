import React from "react";
import { Link } from "react-router-dom";
import "./LeftMenu.css";

const salas = [
  { name: "Tecnología" },
  { name: "React JS Español" },
  { name: "The storlight archive" },
  { name: "Sala de chat X Tecnología" },
];

function RoomList(props) {
  const salas = props.salas;
  const listItems = salas.map((sala, index) => (
    <li key={index}>
      <Link to="#">{sala.name}</Link>
    </li>
  ));
  return <ul className="navSalas">{listItems}</ul>;
}

const LeftMenu = props => {
  return (
    <div className="container">
      <div className="navMenu">
        <div className="datosUser">
        <img src="/img/user-avatar.jpg" alt="" className="photo" />
        <span> {props.user} </span>
        </div>
        <br/>
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
          <RoomList salas={salas} />
        </nav>
      </div>

      <div className="padding-bottom">
      <div className="tittle">
      <span> USUARIOS </span>
      <div className = "add">
          <Link className="link" to="/">
                {" "}
                +{" "}
          </Link>
      </div>
     
      </div>

        <nav>
          <ul className="navUsers">
            <li>
              <Link to="/">Editar Perfil</Link>
            </li>
            <li>
              <Link to="/">Cambiar Contraseña</Link>
            </li>
            <li>
              <Link to="/">Cerrar Sesión</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
