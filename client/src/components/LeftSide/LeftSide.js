import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./LeftSide.css";
import RoomList from "../RoomList/RoomList";
import UserList from "../UserList/UserList";
import UserMenu from "../UserMenu/UserMenu";
import { getJwt } from "../../helpers/jwt";
import { setUsers } from "../../redux/actions/usersAction";
import { constants } from "../../config/constants";
import Reloj from '../Reloj/reloj';

class LeftSide extends Component {
  componentDidMount() {
    axios
      .get(`${constants.api}user/list`, {
        headers: { "auth-token": `${getJwt()}` },
      })
      .then((response) => {
        this.props.setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }

  render() {

    const { usersReducer, chatRoomReducer } = this.props;

    return (
      <div className="left-menu-container">
        <UserMenu user={usersReducer.user.name} />
        <RoomList chatRooms={chatRoomReducer.chatRooms} />
        {/* <UserList users = { this.props.usersReducer.users} /> */}
        <Reloj/>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, chatRoomReducer }) => {
  return { usersReducer, chatRoomReducer };
};

const mapDispatchToProps = {
  setUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
