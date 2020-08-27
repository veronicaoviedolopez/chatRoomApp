import React from "react";
import PropTypes from 'prop-types';
import "./MessageArea.css";

import MessageList from "./MessageList/MessageList";
import NewMessage from "./NewMessage/NewMessage";

const MessageArea = (props) => (
  <div className="messagesArea-container">
    <div className="messages-container">
      <MessageList messages={props.messages} WithchatRooms={props.WithchatRooms}/>
    </div>
      <NewMessage setReadonly={props.setReadonly} onKeyPress={props.onKeyPress} />
  </div>
);

/* MessageArea.propTypes = {
  optionalArrayOf: PropTypes.arrayOf(PropTypes.object)
} */
export default MessageArea;
