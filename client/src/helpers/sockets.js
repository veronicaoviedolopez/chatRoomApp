import store from "../redux/store";
import io from "socket.io-client";
import { addNewMessage } from '../redux/actions/usersAction';
import { constants } from "../config/constants";

export const initSocket = () => {
  let connected = false;
  var newState = store.getState();
  let socket = io.connect(constants.IP_Server);
  
  socket.on("your id", (id) => {
    console.log("User connected to socketID:", id);
  });

  socket.on("new message", (message) => {
    console.log("new message", message);
    receivedMessage(message);
  });

  socket.on("user left", (data) => {
    console.log("user left", data);
  });

  socket.on("user joined", (data) => {
    console.log(data.username + " joined", socket);
    addParticipantsMessage(data);
  });

  socket.on("login", (data) => {
    connected = true;
    // Display the welcome message
    var message = "Welcome to Socket.IO Chat – ";
    console.log(message, "NumUsers Conected:", data.numUsers);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on("typing", (data) => {
    console.log("typing", data.username);
  });

  socket.on("stop typing", (data) => {
    console.log("stop typing", data.username);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on("user left", (data) => {
    console.log(data.username + " left");
    addParticipantsMessage(data);
  });

  socket.on("reconnect", () => {
    console.log("you have been reconnected");
    if (newState.user.username) {
      socket.emit("add user", newState.user.username);
    }
  });

  socket.on("reconnect_error", () => {
    console.log("attempt to reconnect has failed");
  });

  socket.on("disconected", (status) => {
    connected = false;
    console.log("user has been disconnected to the socket ", status);
  });

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
