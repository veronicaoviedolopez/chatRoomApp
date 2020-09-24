import store from "../redux/store";
import io from "socket.io-client";
import { addNewMessage, setCountNewMessages } from '../redux/actions/usersAction';
import { constants } from "../config/constants";

export let socket = null;

export const initSocket = () => {
  const newMessageAudio = new Audio(constants.newMessageSound);
  let newState = store.getState();
  socket = io(constants.IP_Server);
  
  socket.on("login", (data) => {
    console.log("WELCOME to SOCKET.IO ", data.id);
    newState.chatRooms.map(x =>
      socket.emit('enter to room', {
        username: newState.user.username, 
        chatroom: x._id})
    );
  });

  socket.on("new message", (message) => {
    console.log("new message");
    newState = store.getState();
    if(newState.chatRoom._id === undefined ||  newState.chatRoom._id !== message.chatroom_id){
      store.dispatch(setCountNewMessages(message.chatroom_id));
    }
    else {
      receivedMessage(message);
      newMessageAudio.play();
    }
  });

  socket.on("reconnect", () => {
    console.log("you have been reconnected");
  });

  socket.on("reconnect_error", () => {
    console.log("attempt to reconnect has failed");
  });

  socket.on("disconnect", () => {
    console.log('disconnect')
  })


  const receivedMessage = (msg) => {
    store.dispatch(addNewMessage(msg));
  };

  return socket;
};
