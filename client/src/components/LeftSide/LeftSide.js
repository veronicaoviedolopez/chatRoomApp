import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import alertify from 'alertifyjs';
import { toast } from "react-toastify";
import "./LeftSide.css";
import { constants } from '../../config/constants';

import RoomList from "../RoomList/RoomList";
import UserMenu from "../UserMenu/UserMenu";
import UserList from '../UserList/UserList';

import { setUsers, addNewRoom, setChatRoom, setMessages } from "../../redux/actions/usersAction";

class LeftSide extends Component { 
  currentChatRoom = e => {
    const that = this.props;
    axios.get(`${constants.api}chatroom/select/${e.target.id}`)
      .then(res =>  {
        that.setUsers(res.data.users);
        that.setChatRoom({_id:res.data._id, name:res.data.name});
        that.setMessages(res.data.messages);
      })
      .catch(err => toast.error(err.response?.data))
  }

  newChatRoom = () => {
    const that = this.props;
    alertify.prompt('New RoomChat', 'Name:','',
    function(evt, name) {
      axios.post(`${constants.api}chatroom/create`, {
        name,
        users: [that.user._id]
      })
      .then((res) => {
        that.addNewRoom(...res.data);
        alertify.success('Ok: ' + name)
      })
      .catch((err) => alertify.error(err.response?.data))
     },
    () => {});
  }

  redireccionar = () => this.props.history.push("/login");

  render() {
    const {user, users, chatRoom, chatRooms } = this.props;
    return (
      <div className="left-menu-container">
        <UserMenu user={user}/>
        <RoomList setChatRoom={this.newChatRoom} chatRooms={chatRooms} setCurrentChatRoom = {this.currentChatRoom}/>
        <UserList users = { users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
    users: state.users,
    chatRooms: state.chatRooms,
    chatRoom: state.chatRoom
  };
};

const mapDispatchToProps = {
  addNewRoom,
  setUsers,
  setChatRoom,
  setMessages
}
export default connect(mapStateToProps,mapDispatchToProps)(LeftSide);
