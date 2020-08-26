import React from "react";
import PropTypes from 'prop-types';

const MessageList = (props) => (
  <div>
    {
      props.messages.map((msg) => (
      <div key={msg._id} className="FlexRow">
        <img src="/img/user-avatar.jpg" alt="" className="photoMsg" />
        <div className="row width100">
          <div className="col-xs">
            <b> {msg.user_id.name} </b>
            <i className="date">
              <small> {msg.date} </small>
            </i>
          </div>
          <span className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {msg.message}
          </span>
        </div>
      </div>
     ))
    }
  </div>
);

MessageList.propTypes = {
  optionalArrayOf: PropTypes.arrayOf(PropTypes.object)
}

export default MessageList;
