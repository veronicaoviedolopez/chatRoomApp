import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "15452732",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "15452768",
          body: "Hi Veronica",
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.messages.map((msg, index) => (
          <div className="MessagesContainer">
            <div>
            <img src="/img/user-avatar.jpg" alt="" className="photoMsg" />
              <span> {msg.from} </span>
              <span> {msg.date} </span>
            </div>
            <div className="MessageBody">
              <span> {msg.body} </span>
            </div>

          </div>
        ))}
      </>
    );
  }
}

export default Message;
