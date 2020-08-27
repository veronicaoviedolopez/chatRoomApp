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
        that.setUsers([{_id: that.user._id, name: that.user.name}]);
        that.setChatRoom({_id: res.data[0]._id, name: name});
        alertify.success('Ok: ' + name)
      })
      .catch((err) => alertify.error(err.response?.data))
     },
    () => {});
  }

  redireccionar = () => this.props.history.push("/login");

  inviteUser = () =>{
    const that = this.props;
     if(that.chatRoom._id === undefined){
      alertify.error("You have to select a chatroom first");
      return;
    }
  
//grab the dialog instance using its parameter-less constructor then set multiple settings at once.
alertify.confirm()
  .setting({
    'message': `Are you want to generate a link for invite users to chatroom <em> ${that.chatRoom.name}?</em> `,
    'onok': function(){ 
      const link = `${constants.api}invite/user/${that.user._id}/chatroom/${that.chatRoom._id}`;
      navigator.clipboard.writeText(link)
      alertify.success('link Copied, now Paste & Share it');
  }
  })
  .setHeader('<strong> Invite User to ChatRoom </strong> ')
  .set('labels', {ok:'Yes, Copy link to clipboard', cancel:'No, Cancel'})
  .show();

   /*  alertify.dialog('Invite User to ChatRoom',
    function(){
      return{
        main:function(message){
          this.message = "Are you want to generate a link for invite users to sala de chat XXX?";
        },
        setup:function(){
            return { 
              buttons:[{text: "Copy invite link", key:27}],
              focus: { element:0 }
            };
        },
        prepare:function(){
          this.setContent(this.message);
        }
    }}); */
  }
  render() {
    const {user, users, chatRooms } = this.props;
    return (
      <div className="left-menu-container">
        <UserMenu user={user}/>
        <RoomList setChatRoom={this.newChatRoom} chatRooms={chatRooms} setCurrentChatRoom = {this.currentChatRoom}/>
        <UserList inviteUser={this.inviteUser} users = { users} />
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
