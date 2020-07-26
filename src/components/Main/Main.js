import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import "./main.css";
import { getCurrentUser } from "../../state/actions/usersAction";

class Main extends Component {
  render() {
    return (
      <>
        <div id="main">
          <div className="leftSide">
            <LeftMenu user={this.props.currentUser.username} />
          </div>
          <div className="rightSide">
            <Header />
            <div className="rightSideContent" />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
};

const mapStateToProps = ({ usersReducer }) => {
  return usersReducer;
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
