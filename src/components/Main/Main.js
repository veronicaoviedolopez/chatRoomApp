import React, { Component } from "react";
import { connect } from 'react-redux';
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import './main.css'
import {getCurrentUser} from '../../state/actions/usersAction';

 class Main extends Component {
  render() {
    return (
      <>
        <Header user={this.props.user} />
        <div id="main">
          <nav>
            <LeftMenu/>
          </nav>
          <article>Article</article>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser
};

const mapStateToProps = ({usersReducer})=>{
  return usersReducer;
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);