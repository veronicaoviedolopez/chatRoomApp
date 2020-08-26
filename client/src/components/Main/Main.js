import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { constants } from "../../config/constants";
import {addNewMessage} from '../../redux/actions/usersAction';
import "./main.css";

import Header from "../Header/Header";
import MessageArea from "../MessageArea/MessageArea";
import LeftSide from "../LeftSide/LeftSide"

class Main extends Component {

  sendMessage = message => {
    const that = this;
    const msg = {
      message,
      user_id: that.props.user._id,
      chatroom_id: that.props.chatRoom._id
    };
    axios.post(`${constants.api}chatroom/message/create`, msg)
      .then(res => {
        console.log('agrego mensaje')
        console.log({...msg, date: Date.now})
        return that.props.addNewMessage({...msg, date: Date.now});
      })
      .catch(err => toast.error(err.response?.data));
  }

  render() {
    return (
      <div className="dashboard">
        <LeftSide />
        <div className="messages-area">
          <Header chatRoom_name = {this.props.chatRoom.name} />
          <MessageArea messages= {this.props.messages} onKeyPress={this.sendMessage}/>
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chatRoom: state.chatRoom,
    user: state.user,
    chatRoom: state.chatRoom,
    messages: state.messages
  };
};

const mapDispatchToProps = {
  addNewMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);