import React from "react";
import PropTypes from "prop-types";
import "./RoomList.css";
import "../CounterMessages/CounterMessages";
import CounterMessages from "../CounterMessages/CounterMessages";

const RoomList = (props) => (
  <div>
    <div className="tittle">
      <span style={{ width: "90%" }}> ChatRooms </span>
      <div style={{ width: "10%" }}>
        <span className="linkHover" onClick={props.setChatRoom}>
          {" "}
          +{" "}
        </span>
      </div>
    </div>
    <nav>
      <ul className="navSalas">
        <div className="tittle">
          <span style={{ width: "80%" }}>
            {" "}
            {props.chatRooms.map((sala, index) => (
              <li
                className="linkHover"
                key={index}
                onClick={props.setCurrentChatRoom}
                id={sala._id}
              >
                {sala.name}
              </li>
            ))}
          </span>
          <div style={{ width: "20%" }}>
            <span className="linkHover">
              <CounterMessages count={+99} />
            </span>
          </div>
        </div>
      </ul>
    </nav>
  </div>
);

RoomList.propTypes = {
  chatRooms: PropTypes.array.isRequired,
};

export default RoomList;
