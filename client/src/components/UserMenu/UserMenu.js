import React from "react";
import PropTypes from 'prop-types';
import {constants} from '../../config/constants';
import "./UserMenu.css";

const UserMenu = (props) => (
  <div>
    <div className="datosUser">
      <img src= {`${constants.IP_Server}/avatars/${props.user.avatar}`} alt="" className="photo" />
      <span> {props.user.name} </span>
    </div>

    <div>
      <div className="tittle">
        <span> Menu </span>
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

UserMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserMenu;