import React from "react";
import "./UserList.css";
import PropTypes from 'prop-types';

const UserList = (props) => (
  <div>
    <div className="tittle">
      <span style={{width: "80%"}}> Users </span>
      <div style={{width: "20%"}}> 
        <span style={{cursor: "pointer"}} onClick={props.inviteUser}> + </span>
      </div>
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
  users: PropTypes.array.isRequired
}

export default UserList;
