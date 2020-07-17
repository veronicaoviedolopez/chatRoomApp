import React from "react";
import "./App.css";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Switch>
    </BrowserRouter>
  )
}
export default App;