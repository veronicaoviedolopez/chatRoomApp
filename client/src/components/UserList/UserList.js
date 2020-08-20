import React from "react";
import "./UserList.css";
import PropTypes from 'prop-types';

const UserList = (props) => (
  <div>
    <div className="tittle">
      <span> USUARIOS </span>
      <span> + </span>
    </div>

    <nav>
      <ul className="navUsers">
        {props.users.map((u, index) => (
          <li key={index}>{u.name}</li>
        ))}
      </ul>
    </nav>
  </div>
);

UserList.propTypes = {
  chatRooms: PropTypes.array.isRequired
}

export default UserList;
