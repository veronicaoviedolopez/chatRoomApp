import React from "react";
import './Header.css';

const Header = (props) => {
  return (
    <div className="text-light bg-dark bg-muted clearfix text-white" style={{ padding: '.5rem' }}>
    <b className="float-left ">My Username</b>
    {/* <button className="btn btn-danger float-right">Log Out</button> */}
    <p><a href="#" class="float-right text-primary">Log Out</a></p>
  </div>
  );
};

export default Header;
