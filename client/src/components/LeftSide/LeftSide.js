import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./LeftSide.css";
import RoomList from "../RoomList/RoomList";
import UserMenu from "../UserMenu/UserMenu";
import { setUsers } from "../../redux/actions/usersAction";
import { setChatRooms } from '../../redux/actions/chatRoomAction';
import alertify from 'alertifyjs';
import { constants } from '../../config/constants';
import { getJwt } from '../../helpers/jwt';
 
class LeftSide extends Component {
 componentDidMount() {
    this.getChatRooms();
  }
  
  newChatRoom = () => {
    alertify.prompt('New RoomChat', 'Name:','',
    function(evt, name) {
      console.log(name)
      const newChatRoom = {
        name,
        users: ["5f3c11f7df01420444b7a3df"]
      }
      console.log(newChatRoom);
      axios.post(`${constants.api}chatroom/create`,newChatRoom, {
        headers: { "auth-token": `${getJwt()}` },
      })
      .then((res) => {
        console.log('si lo izo');
        //this.getChatRooms();
        alertify.success('You entered: ' + name)
      })
      .catch((err) => console.log(err));
      
     },
    function() { alertify.error('Cancel') });
  }

  getChatRooms() {
    axios
      .get(`${constants.api}chatroom/list`, {
        headers: { "auth-token": `${getJwt()}` },
      })
      .then((res) => {
        const chatrooms = res.data;
        this.setState({ chatrooms });
        console.log(this.state);
        this.props.setChatRooms(res.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { usersReducer, chatRoomReducer } = this.props;
    return (
      <div className="left-menu-container">
        <UserMenu user={usersReducer.user.name} />
        { this.state != null &&
          <RoomList setChatRoom={this.newChatRoom} chatRooms={this.state.chatrooms} />
        }
         {/*
         <UserList users = { this.props.usersReducer.users} /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, chatRoomReducer }) => {
  return { usersReducer, chatRoomReducer };
};

const mapDispatchToProps = {
  setUsers, setChatRooms
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
