import React from "react";
import PropTypes from 'prop-types';
import "./RoomList.css";

const RoomList = (props) => (
  <div>
    <div className="tittle">
      <span> SALAS DE CHAT </span>
      <button onClick={props.setChatRoom}> + </button>
    </div>
    <nav>
      <ul className="navSalas">
        {props.chatRooms.map((sala, index) => (
          <li key={index} onClick={props.setCurrentChatRoom} id={sala._id}>{sala.name}</li>
        ))}
      </ul> 
    </nav>
  </div>
);

RoomList.propTypes = {
  chatRooms: PropTypes.array.isRequired
}

export default RoomList;
