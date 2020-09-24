import React from "react";
import "./UserList.css";
import PropTypes from "prop-types";

const UserList = (props) => (
  <div>
    <div className="tittle">
      <span style={{ width: "90%" }}> Users </span>
      <div style={{ width: "10%" }}>
        <span className="linkHover" onClick={props.inviteUser}>+</span>
      </div>
    </div>
    <nav>
      <ul className="navUsers">
        {props.users.map((u, index) => (
          <li className="linkHover" key={index}>
            {u.firstname} {u.lastname}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
