import React from "react";
import PropTypes from 'prop-types';
import "./RoomList.css";

const RoomList = (props) => (
  <div>
    <div className="tittle">
      <span> SALAS DE CHAT </span>
      <span> + </span>
    </div>
    <nav>
      <ul className="navSalas">
        {props.chatRooms.map((sala, index) => (
          <li key={index}>{sala.name}</li>
        ))}
      </ul> 
    </nav>
  </div>
);
/*
RoomList.PropTypes = {
  chatRooms: PropTypes.arrayOf(
    PropTypes.oneOfType([PropType.number, PropType.string ]))
}
*/
export default RoomList;
