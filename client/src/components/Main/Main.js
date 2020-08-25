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
  sendMessage = message => {
    const that = this.props;
    const msg = {
      message,
      user_id: that.user._id,
      chatroom_id: that.chatRoom._id
    };
    axios.post(`${constants.api}chatroom/message/create`, msg)
      .then(res => {
        console.log('agrego mensaje')
        console.log({...msg, date: Date.now})
        that.addNewMessage({...msg, date: Date.now});
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