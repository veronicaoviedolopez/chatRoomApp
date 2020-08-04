import React, { Component } from "react";
import "./main.css";

import Header from "../Header/Header";
import MessageArea from "../MessageArea/MessageArea";
import LeftSide from "../LeftSide/LeftSide"
import { getJwt } from '../../helpers/jwt';


export default class Main extends Component {
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

  componentDidMount() {
    const jwt = getJwt();
    this.setState({ jwt });
    if (!jwt) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="dashboard">
        <LeftSide />
        <div className="messages-area">
          <Header />
          <MessageArea messages={this.state.messages} />
        </div>
      </div>
    );
  }
}