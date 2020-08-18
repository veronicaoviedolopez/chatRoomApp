import { types as chatRoomTypes } from "../actions/chatRoomAction";

const initialState = {
  currentChatRoom: null,
  chatRooms: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case chatRoomTypes.getChatRooms:
      return {
        ...state,
        chatRooms: state.chatRooms,
      };
      case chatRoomTypes.setChatRooms:
      return {
        ...state,
        chatRooms: payload,
      };
    default:
      return state;
  }
};
