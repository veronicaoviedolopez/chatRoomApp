import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Switch, Route, BrowserRouter, Redirect  } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import InviteUser from "./components/InviteUser/InviteUser";
import PrivateRoute from "./PrivateRoute";
import { addUserSession, getJwt, removeUserSession } from "./helpers/userSessionInfo";
import { setCurrentUser, setUserToken } from "./redux/actions/usersAction";
import { constants } from "./config/constants";
import store from "./redux/store";
import {initSocket, socket} from './helpers/sockets';
const token = getJwt();

if (token) {
  try {
    console.log('hay token')
    const decoded = jwt_decode(token);
    addUserSession(token);
    store.dispatch(setUserToken(decoded));
    axios.post(`${constants.api}auth/token`, decoded)
      .then((response) => {
        const { chatRooms, ...other } = response.data.user;
        store.dispatch(setCurrentUser({
          token,
          chatRooms,
          user: other,
        }));
        initSocket();
    })
    .catch((err) => {
      removeUserSession();
      toast.error(err.response?.data);
      console.log('error token')
    });
  }
  catch(err) {
    removeUserSession();
    toast.error(err.message);
  }
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/invite/user/:iduser/chatroom/:roomid" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              path="/invite/user/:iduser/chatroom/:roomid"
              component={InviteUser}
            />
          </Switch>        
          <ToastContainer autoClose={2000} />
        </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) => {
    return {
      isAuth: state.isAuth
    };
};

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);