import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";


import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { constants } from "../../config/constants";
import { addNewMessage, logOut } from '../../redux/actions/usersAction';
import { removeUserSession } from '../../helpers/userSessionInfo'
import "./main.css";

import Header from "../Header/Header";
import MessageArea from "../MessageArea/MessageArea";
import WelcomeMessage from "../MessageArea/WelcomeMessage/WelcomeMessage";
import LeftSide from "../LeftSide/LeftSide"
import {socket} from '../../helpers/sockets'

class Main extends Component {
  sendMessage = message => {
    if ((message === "" || message ==="\n") || !socket.connected)
      return;

    const msg = {
      message,
      user_id: this.props.user._id,
      chatroom_id: this.props.chatRoom._id
    };  
    
    axios.post(`${constants.api}chatroom/message/create`, msg)
      .then((res) => {
        msg.user_id = this.props.user
        this.props.addNewMessage({...res.data});
        socket.emit("new message", {...res.data});
      })
      .catch(err => toast.error(err.response?.data));
  }

  logOut = () => {
    if(Object.entries(socket).length !== 0)
      socket.emit("disconnection");
    removeUserSession()
    this.props.logOut();
  }

  render() {
    return (
      <div className="dashboard">
        <LeftSide />
        <div className="messages-area">
          <Header chatRoom_name = {this.props.chatRoom.name} logOut={this.logOut}/>
          { this.props.chatRoom._id === undefined &&
              <WelcomeMessage WithchatRooms = {this.props.chatRooms.length === 0} />
          }
           { this.props.chatRoom._id !== undefined &&
                <MessageArea messages= {this.props.messages} 
              onKeyPress={this.sendMessage} 
              setReadonly = {this.props.chatRoom._id === undefined} /> 
           }
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
    chatRooms: state.chatRooms,
    messages: state.messages,
  };
};

const mapDispatchToProps = {
  addNewMessage,
  logOut
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);