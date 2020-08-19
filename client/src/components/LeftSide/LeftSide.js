import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./LeftSide.css";
import RoomList from "../RoomList/RoomList";
import UserMenu from "../UserMenu/UserMenu";
import { setUsers } from "../../redux/actions/usersAction";
import alertify from 'alertifyjs';
import { constants } from '../../config/constants';
import { getJwt } from '../../helpers/jwt';
 
class LeftSide extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       roomsList: []
    }
  }
  
  componentDidMount() {
    console.log(this.props.chatRooms);
  }
  
  newChatRoom = () => {
    const that = this;
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
        that.getChatRooms();
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
    const { users, chatRooms } = this.props;
    return (
      <div className="left-menu-container">
        <UserMenu user={users.user.name} />
        {
          this.state ?
          <RoomList setChatRoom={this.newChatRoom} chatRooms={this.state.chatrooms} />
          : null
        }
         {/*
         <UserList users = { this.props.usersReducer.users} /> */}
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
export default connect(mapStateToProps)(LeftSide);
