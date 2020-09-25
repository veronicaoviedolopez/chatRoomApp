import React from "react";
import PropTypes from "prop-types";
import "./RoomList.css";
import "../CounterMessages/CounterMessages";
import CounterMessages from "../CounterMessages/CounterMessages";

const RoomList = (props) => (
  <div>
    <div className="tittle">
      <span style={{ width: "90%" }}> ChatRooms </span>
      <div className="tooltip" style={{ width: "10%" }}>
        <span className="tooltiptext">new chatRoom</span>
        <span className="linkHover" onClick={props.setChatRoom}>+</span>
      </div>
    </div>

    <ul className="navSalas">
      {props.chatRooms.map((sala, index) => (
        <li
          className={
            props.chatRoomId === sala._id ? "linkSelected" : "linkHover"
          }
          key={index}
          onClick={props.setCurrentChatRoom}
          id={sala._id}
        >
          {sala.name}
          <sup key={index}>
            {
              sala.count !== undefined &&
                <CounterMessages count={sala.count} />
            }
          </sup>
        </li>
      ))}
    </ul>
  </div>
);

RoomList.propTypes = {
  chatRooms: PropTypes.array.isRequired,
};

export default RoomList;
