import React, { Component } from "react";
import Header from "../Header/Header";
import Photo from "../User/Photo";
import LeftMenu from "../LeftMenu/LeftMenu";

const salas = [
  { name: "Sala de chat 1" },
  { name: "Sala de chat  2" },
  { name: "Sala de chat  3" },
  { name: "Sala de chat  4" },
];

function RoomList(props) {
  const salas = props.salas;
  const listItems = salas.map((sala, index) => (
    <li key={index} >
      <a href="/room/{{index}}">{sala.name}</a>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <Photo/>
          <LeftMenu/>
          <nav>
            <RoomList salas={salas} />
          </nav>
        </div>
      </div>
    );
  }
}