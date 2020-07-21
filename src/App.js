import React from "react";
import "./App.css";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './state/store/store';

function App() {
  return (
    <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
          </Switch>
        </BrowserRouter>
      </Provider> 
  )
}

export default App;
