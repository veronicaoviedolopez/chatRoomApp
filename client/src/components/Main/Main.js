import React, { Component } from "react";
import { connect } from "react-redux";
import "./main.css";

import Header from "../Header/Header";
import MessageArea from "../MessageArea/MessageArea";
import LeftSide from "../LeftSide/LeftSide"



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
        {
          id: "1-2-15452732",
          from: "VeronicaO",
          to: "2",
          date: "Hace 5 mininutos",
          body: "Hi Sanderson!",
        },
        {
          id: "2-1-15452732",
          from: "Sander",
          to: "1",
          date: "HAec algunos segundos",
          body: "Hi Veronica",
        },
      ],
    };
  }

  render() {
    return (
      <div className="dashboard">
        <LeftSide />
        <div className="messages-area">
          <Header chatRoom_name = {this.props.chatRoom.name} />
          <MessageArea messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chatRoom: state.chatRoom
  };
};
export default connect(mapStateToProps)(Main);