import React from "react";

export default (props) => {
    return (
    <div className="welcomeMessage"> 
      <strong><h2>Welcome To ChatRoom App</h2> </strong><br/> 
        { props.WithchatRooms?
        <h3> You have to add a new ChatRoom <br/><br/>
         In order to start a chat, You need to add a new chatRoom, invite people and then start to chat with them</h3>
        :    
        <h3> Select a ChatRoom  <br/> <br/>
         Send and receive messages in a chatRoom, you can share it with all user into the chatroom</h3>
        }
        <img alt="logo" src="/img/human-chain.png" style={{width:"250px", height:"250px", opacity:"0.5"}}></img>
   </div>);
  }