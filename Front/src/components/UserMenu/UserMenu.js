import React from "react";
import "./UserMenu.css";

const UserMenu = (props) => (
  <div>
    
    <div className="datosUser">
      <img src="/img/user-avatar.jpg" alt="" className="photo" />
      <span> {props.user} </span>
    </div>

    <div className="userMenu">
      <div className="tittle">
        <span> MENU </span>
      </div>
      <nav>
        <ul className="userMenu">
          <li>
              Editar Usuario
          </li>
          <li>
              Cambiar Contraseña
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default UserMenu;