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
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
      ],
    };
  }

  render() {

    const { messages } = this.state;

    return (
      <div className="messages-container">
        {
          messages.map(msg => (
            <div className="FlexRow">
              <img src="/img/user-avatar.jpg" alt="" className="photoMsg" />
              <div className="row width100">
                <div className="col-xs">
                  <b> {msg.from} </b>
                  <i className="date"> 
                    <small> {msg.date} </small> 
                  </i>
                </div>
                <span className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> {msg.body} </span>
              </div>
            </div>
          ))
        }
        <div className="inp">
          <input type="text" placeholder="Escribe un mensaje"></input>
        </div>
      </div>
    );
  }
}

export default Message;
