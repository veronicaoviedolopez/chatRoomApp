import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constants } from "../../config/constants";
import { addUserSession, getJwt } from "../../helpers/userSessionInfo";
import { addNewRoom } from "../../redux/actions/usersAction";

class InviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: false,
      chatRoom: {},
      token: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true, userAdded: false, token: getJwt() });
    axios
      .get(
        `/api/user/invite/${this.props.match.params.iduser}/chatroom/${this.props.match.params.roomid}`
      )
      .then((res) => {
        if (this.state.token !== null) {
          addUserSession(this.state.token);
        }
        this.setState({
          user: res.data,
          isLoading: false,
          chatRoom: res.data.chatRooms[0],
        });
      })
      .catch(() => {});
  }

  addUserTochatRoom = () => {
    this.setState({ isLoading: true, userAdded: false });
    var decoded = jwt_decode(this.state.token);
    axios
      .get(
        `/api/invite/user/${decoded._id}/chatroom/${this.props.match.params.roomid}`
      )
      .then((res) => {
        toast.success("User Added Succesfuly");
        this.props.addNewRoom(res.data);
        this.setState({ isLoading: false, userAdded: true });
      })
      .catch(() => {});
  };
  render() {
    const { user, isLoading, chatRoom, userAdded, token } = this.state;
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
            src={`/avatars/${user.avatar}`}
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
        {token == null && (
          <div>
            <h4>
              NOTE: You need to login first, Would you like be redirected to
              login page and set a session?
            </h4>
          </div>
        )}
        <br />
        <div className="divOkCancel">
          {token == null ? (
            <Link
              className="out_link linkHover"
              to={`/login/invite/user/${this.props.match.params.iduser}/chatroom/${this.props.match.params.roomid}`}
            >
              Ok
            </Link>
          ) : (
            <button
              className="linkHover"
              style={{ width: "100px", opacity: "0.5", margin: "10px" }}
              onClick={this.addUserTochatRoom}
            >
              Ok
            </button>
          )}
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addNewRoom,
};

export default connect(null, mapDispatchToProps)(InviteUser);
