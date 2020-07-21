import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>UserName</li>
      </ul>
      <div>
        <button>LogOut</button>
      </div>
    </nav>
  );
};

export default Header;
