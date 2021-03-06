import React, { Component } from "react";
import "./MessageArea.css";
import MessageList from "./MessageList/MessageList";
import NewMessage from "./NewMessage/NewMessage";

class MessageArea extends Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef();
  }
  scrollToBottom = () => {
    this.boxRef.current.scrollTop = this.boxRef.current.scrollHeight;
  };

  componentDidUpdate = () => {
    this.scrollToBottom();
  };

  render() {
    return (
      <div className="messagesArea-container">
        <div className="messages-container" ref={this.boxRef}>
          <MessageList
            messages={this.props.messages}
            WithchatRooms={this.props.WithchatRooms} />
        </div>
        <NewMessage onKeyPress={this.props.onKeyPress} />
      </div>
    );
  }
}

export default MessageArea;
