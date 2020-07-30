import React, { Component } from "react";
import { connect } from "react-redux";
import "./LeftSide.css";

import RoomList from "../RoomList/RoomList";
import UserList from  "../UserList/UserList";
import UserMenu from "../UserMenu/UserMenu";

class LeftSide extends Component {
  render() {
    return (
        <div className="left-menu-container">
        <UserMenu user = { this.props.usersReducer.currentUser.username } />
        <RoomList chatRooms = { this.props.chatRoomReducer.chatRooms } />
        <UserList users = { this.props.usersReducer.users} />
      </div>
    );
  }
}


/*
const mapDispatchToProps = {
    getCurrentUser,
    getChatRooms,
  };
  */
  
  const mapStateToProps = ({ usersReducer, chatRoomReducer }) => {
    return { usersReducer, chatRoomReducer };
  };
  
  
  export default connect(mapStateToProps, null)(LeftSide);
