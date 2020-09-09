import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import InviteUser from "./components/InviteUser/InviteUser";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Provider } from 'react-redux'
import store from './redux/store';

export default () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              path="/invite/user/:iduser/chatroom/:roomid"
              component={InviteUser}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
}