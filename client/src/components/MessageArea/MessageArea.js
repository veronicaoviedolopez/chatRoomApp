import React from "react";
import "./MessageArea.css";

import MessageList from "./MessageList/MessageList";
import NewMessage from "./NewMessage/NewMessage";

const MessageArea = (props) => (
  <div className="messagesArea-container">
    <div className="messages-container">
      <MessageList messages={props.messages} />
    </div>
      <NewMessage />
  </div>
);

export default MessageArea;
