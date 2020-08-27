import React from "react";
import "./Header.css";

const Header = props => (
  <nav className="main-nav">
    <ul>
      <li>{props.chatRoom_name}</li>
    </ul>
    <div>
      <button onClick={props.logOut}>LogOut</button>
    </div>
  </nav>
);

export default Header;
