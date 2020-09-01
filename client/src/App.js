import React from "react";
import "./App.css";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import InviteUser from './components/InviteUser/InviteUser';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store';
import PrivateRoute from "./PrivateRoute";

if(localStorage.token) {
  // decodear el token
  // enviar el usuario al storage (redux) => Store.dispatch(setCurrentUser(decoded.user));

  // enviar el TOKEN al endpoint nuevo para validarlo /api/token/validate
  // si no es valido borrar el usuario actual del storage
}

function App() {
  return (
    <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={ Main } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route path="/invite/user/:iduser/chatroom/:roomid" component={ InviteUser } />
          </Switch>
        </BrowserRouter>
      </Provider> 
  )
}

export default App;
