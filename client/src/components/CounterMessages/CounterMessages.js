import React from "react";
import "./CounterMessages.css";

const CounterMessages = props => (
    <span className="div-msg-counter"> {props.count> 3 ? `+${props.count}` : props.count} </span>
);

export default CounterMessages;