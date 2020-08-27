import React from "react";
import PropTypes from 'prop-types';
import "./RoomList.css";

const RoomList = (props) => (
  <div>
    <div className="tittle">
     <span style={{width: "80%"}}> ChatRooms </span> 
     <div style={{width: "20%"}}> 
      <span style={{cursor: "pointer"}} onClick={props.setChatRoom}> + </span>
     </div>
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
