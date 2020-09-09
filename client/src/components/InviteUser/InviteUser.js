import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { constants } from "../../config/constants";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUserSession, getJwt } from "../../helpers/userSessionInfo";

class InviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: false,
      chatRoom: {},
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true, userAdded: false });
    axios
      .get(
        `${constants.api}user/invite/${this.props.match.params.iduser}/chatroom/${this.props.match.params.roomid}`
      )
      .then((res) =>
        this.setState({
          user: res.data,
          isLoading: false,
          chatRoom: res.data.chatRooms[0],
        })
      )
      .catch(() => {});
  }

  addUserTochatRoom = () => {
    this.setState({ isLoading: true, userAdded: false });
    const token = getJwt();
    if (token) {
      var decoded = jwt_decode(token);
      console.log('decoded', decoded);
      addUserSession(token);
      axios
        .get(
          `${constants.api}invite/user/${decoded._id}/chatroom/${this.props.match.params.roomid}`
        )
        .then((res) => {
          toast.success("User Added Succesfuly");
          this.setState({ isLoading: false, userAdded: true });
        })
        .catch(() => {});
    }
    else {
      console.log('sin token')
      return toast.info("You need to login first");
    }
    
  }
  render() {
    const { user, isLoading, chatRoom, userAdded } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (userAdded) {
      return (
        <div className="wrapper">
          <div className="form-tittle">ChatRoom App Invitation </div>
          You have been added succesfuly
          <Link className="out_link linkHover" to="/">
            Go to ChatRoomApp
          </Link>
          <ToastContainer autoClose={2000} />
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="form-tittle">ChatRoom App Invitation </div>
        Hello, You have a pending request from the user
        <div className="datosUser">
          <img
            src={`${constants.IP_Server}/avatars/${user.avatar}`}
            alt=""
            className="photo"
          />
          <span className="text-capitalize">
            {user.firstname} {user.lastname}
            <i>{` (${user.username})`}</i>
          </span>
        </div>
        <br />
        Do you want to be added to the chat room
        <div className="text-capitalize">{chatRoom.name}</div>
        <br />
        <div className="divOkCancel">
          <button
            className="linkHover"
            style={{ width: "100px", opacity: "0.5", margin: "10px" }}
            onClick={this.addUserTochatRoom}
          >
            Ok
          </button>
          <button
            className="linkHover"
            style={{ width: "100px", opacity: "0.5", margin: "10px" }}
          >
            Cancel
          </button>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default InviteUser;
