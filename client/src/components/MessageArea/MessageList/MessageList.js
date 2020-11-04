import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { constants } from "../../../config/constants";
moment().format();

const MessageList = (props) => (
  <div>
    {props.messages.map((msg) => (
      <div key={msg._id} className="FlexRow">
        <img
          src={`/avatars/${msg.user_id.avatar}`}
          alt=""
          className="photoMsg"
        />
        <div className="row width100">
          <div className="col-xs">
            <small>
              {`${msg.user_id.firstname} ${msg.user_id.lastname}`}
            </small>
            <i>
              <small> 
                {` [${msg.user_id.username}] `} 
              </small>
            </i>
            <span className="date"> 
              {`  ${moment(msg.date).fromNow()}`} 
            </span>
          </div>
          <span className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {msg.message}
          </span>
        </div>
      </div>
    ))}
  </div>
);

MessageList.propTypes = {
  optionalArrayOf: PropTypes.arrayOf(PropTypes.object),
};

export default MessageList;
