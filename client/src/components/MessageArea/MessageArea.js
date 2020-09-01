import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageArea.css";

import MessageList from "./MessageList/MessageList";
import NewMessage from "./NewMessage/NewMessage";

class MessageArea extends Component{
  constructor(props) {
    super(props)
    this.boxRef = React.createRef()
}
scrollToBottom = () => {
  this.boxRef.current.scrollTop = this.boxRef.current.scrollHeight
}

componentDidUpdate = () => {
  this.scrollToBottom()
}
  render() {
    return (
      <div className="messagesArea-container">
        <div className="messages-container" ref={this.boxRef}>
          <MessageList
            messages={this.props.messages}
            WithchatRooms={this.props.WithchatRooms} />
        </div>
        <NewMessage
          setReadonly={this.props.setReadonly}
          onKeyPress={this.props.onKeyPress}
        />
      </div>
    );
  }
}
/* MessageArea.propTypes = {
  optionalArrayOf: PropTypes.arrayOf(PropTypes.object)
} */
export default MessageArea;
