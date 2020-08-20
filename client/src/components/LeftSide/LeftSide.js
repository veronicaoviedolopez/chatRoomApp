import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./LeftSide.css";
import RoomList from "../RoomList/RoomList";
import UserMenu from "../UserMenu/UserMenu";
import UserList from '../UserList/UserList';
import { addNewRoom } from "../../redux/actions/chatRoomAction";
import { setUsers } from "../../redux/actions/usersAction";
import alertify from 'alertifyjs';
import { constants } from '../../config/constants';
import { toast } from "react-toastify";
 
class LeftSide extends Component {
  currentChatRoom = e => {
    const that = this;
    axios.get(`${constants.api}chatroom/list/users/${e.target.id}`)
      .then(res =>  that.props.setUsers(res.data.users))
      .catch(err => toast.error(err.response?.data))
  }

  newChatRoom = () => {
    const that = this;
    alertify.prompt('New RoomChat', 'Name:','',
    function(evt, name) {
      const newChatRoom = {
        name,
        users: [that.props.users.user._id]
      }
      axios.post(`${constants.api}chatroom/create`,newChatRoom)
      .then((res) => {
        that.props.addNewRoom(...res.data);
        alertify.success('Ok: ' + name)
      })
      .catch((err) => alertify.error(err.response?.data))
     },
    () => {});
  }

  redireccionar = () => this.props.history.push("/login");

  render() {
    const { users, chatRooms } = this.props;
    return (
      <div className="left-menu-container">
        <UserMenu user={users.user.name} />
          <RoomList setChatRoom={this.newChatRoom} chatRooms={chatRooms.chatRooms} setCurrentChatRoom = {this.currentChatRoom}/>
          { !users.user ?
            null
          : <UserList users = { users.users} /> }
         {/*<UserList users = { this.props.usersReducer.users} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.usersReducer,
    chatRooms: state.chatRoomReducer
   };
};

const mapDispatchToProps = {
  addNewRoom,
  setUsers
}
export default connect(mapStateToProps,mapDispatchToProps)(LeftSide);
