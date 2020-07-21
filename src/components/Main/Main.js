import React, { Component } from "react";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import './main.css'

export default class Main extends Component {
  render() {
    return (
      <>
        <Header/>
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
