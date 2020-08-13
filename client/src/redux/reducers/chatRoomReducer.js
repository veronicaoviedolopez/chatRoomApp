import { types as chatRoomTypes } from "../actions/chatRoomAction";

const initialState = {
  currentChatRoom: {
    _id: null,
    name: null,
  },
  chatRooms: [
    { _id: 1,
      name: "Tecnología" 
    },
    {  _id: 2,
      name: "React JS Español" 
    },
    {  _id: 3,
      name: "The storlight archive" 
    },
    {  _id: 4,
      name: "Sala de chat X Tecnología" 
    },
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
