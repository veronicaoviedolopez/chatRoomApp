import store from "../redux/store";
import io from "socket.io-client";
import { addNewMessage, setCountNewMessages } from '../redux/actions/usersAction';
import { constants } from "../config/constants";

export let socket = {}

export const initSocket = () => {
  let connected = false;
  let newState = store.getState();
  // socket = io(constants.IP_Server);
  var socket = io(constants.IP_Server,{transports: ['websocket'], upgrade: false});
  const newMessageAudio = new Audio(constants.newMessageSound);

  socket.emit("notifyAllThatIamConnected", newState.user.username);

  socket.on("login", (data) => {
    connected = true;
    console.log("WELCOME to SOCKET.IO ", data.id);
    newState.chatRooms.map(x => {
      socket.emit('enter to room', {
        username: newState.user.username, 
        chatroom: x._id})
    });
  });

  socket.on("user joined", (data) => {
    console.log("user joined", data);
    addParticipantsMessage(data);
  });

  socket.on("user left", (data) => {
    console.log("user left", data);
  });

  socket.on("new message", (message) => {
    console.log("new message", message);
    newState = store.getState();
    console.log('newState.chatRoom', newState.chatRoom);
    console.log('message.chatroom_id',message.chatroom_id);
    console.log(newState.chatRoom._id === undefined ||  newState.chatRoom._id != message.chatroom_id);

    if(newState.chatRoom._id === undefined ||  newState.chatRoom._id != message.chatroom_id){
      store.dispatch(setCountNewMessages(message.chatroom_id));
    }
    else {
      receivedMessage(message);
      newMessageAudio.play();
    }
  });


  socket.on("user left", (data) => {
    console.log(data.username + " left");
    addParticipantsMessage(data);
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

  const addParticipantsMessage = (data) => {
    var message = "";
    if (data.numUsers === 1) {
      message += "there's 1 participant";
    } else {
      message += "there are " + data.numUsers + " participants";
    }
    console.log(message);
  };

  const receivedMessage = (msg) => {
    store.dispatch(addNewMessage(msg));
  };

  return socket;
};
