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

const token = getJwt();
let decoded = null;
if (token) {
  try {
    decoded = jwt_decode(token);
  }
  catch(err) {
    removeUserSession();
    toast.error(err.message);
  }
}
  
if (decoded) {
  console.log(decoded);
  addUserSession(token);
  store.dispatch(setUserToken(decoded));

  axios
    .post(`${constants.api}auth/token`, decoded)
    .then((response) => {
      const { chatRooms, ...other } = response.data.user;
      store.dispatch(setCurrentUser({
        token,
        chatRooms,
        user: other,
      }));
    })
    .catch((err) => {
      removeUserSession();
      toast.error(err.response?.data);
    });
  // decodear el token
  // enviar el usuario al storage (redux) => Store.dispatch(setCurrentUser(decoded.user));

  // enviar el TOKEN al endpoint nuevo para validarlo /api/token/validate
  // si no es valido borrar el usuario actual del storage
}

class App extends Component {

  render() {
   /*  if (this.props.isAuth != true) {
      return <Redirect to='/'/>
    } */
    return (
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
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);