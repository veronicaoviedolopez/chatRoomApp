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
          <li key={index}>{u.username}</li>
        ))}
      </ul>
    </nav>
  </div>
);
/*
UserList.PropTypes = {
  chatRooms: PropTypes.arrayOf(
    PropTypes.oneOfType([PropType.number, PropType.string ]))
}
*/
export default UserList;
