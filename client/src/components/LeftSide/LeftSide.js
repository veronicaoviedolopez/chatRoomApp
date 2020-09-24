import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import alertify from "alertifyjs";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "./LeftSide.css";
import { constants } from "../../config/constants";
import RoomList from "../RoomList/RoomList";
import UserMenu from "../UserMenu/UserMenu";
import UserList from "../UserList/UserList";
import {
  setUsers,
  editCurrentUser,
  addNewRoom,
  setChatRoom,
  setMessages,
  resetCountNewMessages,
} from "../../redux/actions/usersAction";

class LeftSide extends Component {
  currentChatRoom = (e) => {
    const that = this.props;
    if (that.chatRoom._id === e.target.id) 
      return;
    axios
      .get(`${constants.api}chatroom/select/${e.target.id}`)
      .then((res) => {
        that.setUsers(res.data.users);
        that.setChatRoom({ _id: res.data._id, name: res.data.name });
        that.setMessages(res.data.messages);
        that.resetCountNewMessages(res.data._id);
      })
      .catch((err) => toast.error(err.response?.data));
  };

  editUsername = () => {
    const that = this.props;
    alertify
      .prompt(
        "Chage Username",
        "New Username:",
        that.user.username,
        function (evt, username) {
          axios
            .patch(`${constants.api}user/edit/${that.user._id}`, { username })
            .then((resp) => {
              that.editCurrentUser(resp.data);
              alertify.success("Username Updated");
            })
            .catch((err) => alertify.error(err.response?.data));
        },
        () => {}
      )
      .set("type", "text");
  };

  editPassword = () => {
    const that = this.props;
    alertify
      .prompt(
        "Change Password",
        "New Password:",
        "",
        function (evt, password) {
          axios
            .patch(`${constants.api}user/edit/${that.user._id}`, { password })
            .then((resp) => {
              that.editCurrentUser(resp.data);
              alertify.success("Password Updated");
            })
            .catch((err) => alertify.error(err.response?.data));
        },
        () => {}
      )
      .set("type", "password");
  };

  newChatRoom = () => {
    const that = this.props;
    alertify
      .prompt(
        "New RoomChat",
        "Name:",
        "",
        function (evt, name) {
          axios
            .post(`${constants.api}chatroom/create`, {
              name,
              users: [that.user._id],
            })
            .then((res) => {
              that.addNewRoom(res.data);
              that.setUsers(res.data.users);
              that.setChatRoom({ _id: res.data._id, name: name });
              that.setMessages(res.data.messages);
              alertify.success("Ok: " + name);
            })
            .catch((err) => toast.error(err.response?.data));
        },
        (err) => toast.error(err)
      )
      .set("type", "text");
  };

  redireccionar = () => this.props.history.push("/login");

  inviteUser = () => {
    const that = this.props;
    if (that.chatRoom._id === undefined) {
      alertify.error("You have to select a chatroom first");
      return;
    }

    alertify
      .confirm()
      .setting({
        message: `Are you want to generate a link for invite users to chatroom <em> ${that.chatRoom.name}?</em> `,
        onok: function () {
          const link = `${constants.client}invite/user/${that.user._id}/chatroom/${that.chatRoom._id}`;
          navigator.clipboard.writeText(link);
          alertify.success("link Copied, now Paste & Share it");
        },
      })
      .setHeader("<strong> Invite User to ChatRoom </strong> ")
      .set("labels", {
        ok: "Yes, Copy link to clipboard",
        cancel: "No, Cancel",
      })
      .show();
  };
  render() {
    const { user, users, chatRooms, chatRoom } = this.props;
    const tittle = ".:. ChatRoom App .:.";
    return (
      <div className="left-menu-container">
        <UserMenu
          user={user}
          editUsername={this.editUsername}
          editPassword={this.editPassword}
        />
        <RoomList
          setChatRoom={this.newChatRoom}
          chatRooms={chatRooms}
          chatRoomId={this.props.chatRoom._id}
          setCurrentChatRoom={this.currentChatRoom}
        />
        {this.props.chatRoom._id && (
          <UserList inviteUser={this.inviteUser} users={users} />
        )}
        <Helmet>
          <title>
            {this.props.chatRoom._id
              ? `chatRoom ${chatRoom.name} ${
                  chatRoom.count ? "(" + this.props.count + ")" : ""
                }`
              : `${tittle} ${chatRooms.reduce(
                  (count, c) => count + (c.count ? c.count : 0),
                  0
                )} messages`}
          </title>
          <meta name="title" content={chatRoom._id ? chatRoom.name : tittle} />
        </Helmet>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
    chatRooms: state.chatRooms,
    chatRoom: state.chatRoom,
  };
};

const mapDispatchToProps = {
  addNewRoom,
  setUsers,
  setChatRoom,
  setMessages,
  editCurrentUser,
  resetCountNewMessages,
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
