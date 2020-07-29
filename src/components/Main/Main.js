import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import "./main.css";
import { getCurrentUser } from "../../state/actions/usersAction";
import { getChatRooms } from "../../state/actions/chatRoomAction";
import Message from "../Message/Message";

class Main extends Component {
  render() {
    return (
      <div className="dashboard">
        <LeftMenu
            user={this.props.usersReducer.currentUser.username}
            chatRooms={this.props.chatRoomReducer.chatRooms}
            users={this.props.usersReducer.users}
          />
        <div className="messages-area">
          <Header />
          <Message />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
  getChatRooms,
};

const mapStateToProps = ({ usersReducer, chatRoomReducer }) => {
  return { usersReducer: usersReducer, chatRoomReducer: chatRoomReducer };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
