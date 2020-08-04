import React from "react";
import "./UserList.css";

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

export default UserList;
