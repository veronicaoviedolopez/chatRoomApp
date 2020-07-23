import React from "react";
import "./Header.css";

const Header = props => 
    <nav className="main-nav">
      <ul>
        <li>{props.user}</li>
      </ul>
      <div>
        <button>LogOut</button>
      </div>
    </nav>

export default Header;

