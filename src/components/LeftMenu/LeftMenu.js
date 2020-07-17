import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <Router>
      <div>
        <p className="font-weight-bold text-center">MENU</p>
        <nav>
          <ul>
            <li>
              <Link to="/user">Editar Perfil</Link>
            </li>
            <li>
              <Link to="/user">Change Password</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default LeftMenu;

function User() {
  return <div>USER PROFILE PAGE THIS</div>;
}