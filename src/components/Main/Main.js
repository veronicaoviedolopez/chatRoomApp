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
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2" >
            <LeftMenu
              user={this.props.usersReducer.currentUser.username}
              chatRooms={this.props.chatRoomReducer.chatRooms}
              users={this.props.usersReducer.users}
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
            <Header />
            <div className="rightSideContent">
              <Message />
            </div>
          </div>
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
