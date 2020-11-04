import React from "react";
import PropTypes from "prop-types";
import { constants } from "../../config/constants";
import "./UserMenu.css";

const UserMenu = (props) => (
  <div>
    <div className="datosUser">
      <img
        src={`${window.location.origin}/avatars/${props.user.avatar}`}
        alt=""
        className="photo"
      />
      <span>
        {props.user.firstname} {props.user.lastname}{" "}
        <i>
          <small>{` [${props.user.username}]`}</small>
        </i>
      </span>
    </div>

    <div>
      <div className="tittle">
        <span> Menu </span>
      </div>
      <nav>
        <ul className="userMenu">
          <li className="linkHover" onClick={props.editUsername}>
            Edit Username
          </li>
          <li className="linkHover" onClick={props.editPassword}>
            Change Password
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

UserMenu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserMenu;
