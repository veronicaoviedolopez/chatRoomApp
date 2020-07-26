import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import "./main.css";
import { getCurrentUser } from "../../state/actions/usersAction";
import { getChatRooms } from "../../state/actions/chatRoomAction";

class Main extends Component {
  render() {
    return (
      <>
        <div id="main">
          <div className="leftSide">
            <LeftMenu
              user={this.props.usersReducer.currentUser.username}
              chatRooms={this.props.chatRoomReducer.chatRooms}
              users={this.props.usersReducer.users}
            />
          </div>
          <div className="rightSide">
            <Header />
            <div className="rightSideContent" />
          </div>
        </div>
      </>
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
