import React from "react";
import "./CounterMessages.css";

const CounterMessages = props => (
    <div className="div-msg-counter">
      <span> {props.count} </span>
    </div>
);

export default CounterMessages;