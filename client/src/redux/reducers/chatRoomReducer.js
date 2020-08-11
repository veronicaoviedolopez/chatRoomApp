import { types as chatRoomTypes } from "../actions/chatRoomAction";

const initialState = {
  currentChatRoom: {
    name: "",
  },
  chatRooms: [
    { name: "Tecnología" },
    { name: "React JS Español" },
    { name: "The storlight archive" },
    { name: "Sala de chat X Tecnología" },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case chatRoomTypes.getChatRooms:
      return {
        ...state,
        chatRooms: state.chatRooms,
      };
    default:
      return state;
  }
};
