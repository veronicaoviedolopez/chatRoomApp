import React from "react";

const MessageList = (props) => (
  <div>
    {
      props.messages.map((msg) => (
      <div className="FlexRow">
        <img src="/img/user-avatar.jpg" alt="" className="photoMsg" />
        <div className="row width100">
          <div className="col-xs">
            <b> {msg.from} </b>
            <i className="date">
              <small> {msg.date} </small>
            </i>
          </div>
          <span className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {" "}
            {msg.body}{" "}
          </span>
        </div>
      </div>
     ))
    }
  </div>
);

export default MessageList;
