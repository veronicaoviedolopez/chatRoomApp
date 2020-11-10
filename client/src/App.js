import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import store from "./redux/store";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import InviteUser from "./components/InviteUser/InviteUser";
import PrivateRoute from "./PrivateRoute";
import {
  addUserSession,
  getJwt,
  removeUserSession,
} from "./helpers/userSessionInfo";
import { setCurrentUser, setUserToken } from "./redux/actions/usersAction";
import { constants } from "./config/constants";
import { initSocket, socket } from "./helpers/sockets";
const token = getJwt();

if (token) {
  try {
    const decoded = jwt_decode(token);
    addUserSession(token);
    store.dispatch(setUserToken(decoded));
    axios
      .post(`/api/auth/token`, decoded)
      .then((response) => {
        const { chatRooms, ...other } = response.data.user;
        store.dispatch(
          setCurrentUser({
            token,
            chatRooms,
            user: other,
          })
        );
        if (!socket) 
          initSocket();
      })
      .catch((err) => {
        toast.error(err.response?.data);
      });
  } catch(err) {
    removeUserSession();
    toast.error(err.message);
  }
}

const My404Component = () => {
  return(<img src="https://saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg" alt="..." />)
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login/invite/user/:iduser/chatroom/:roomid" component={Login} />
          <Route exact path="/invite/user/:iduser/chatroom/:roomid" component={InviteUser} />
          <PrivateRoute exact path="/" isAuth={this.props.isAuth} component={Main} /> 
          <Route path='/404' component={My404Component} />
          <Redirect from='*' to='/404' />*/}
          <Route path="/404" component={My404Component} />
        </Switch>
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
