import { types as userTypes } from "../actions/usersAction";

const initialState = {
  isAuth: false,
  user: {},
  users: [],
  chatRoom: {},
  chatRooms: [],
  messages: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        chatRooms: payload.chatRooms,
      };
    case userTypes.setUsers:
      return {
        ...state,
        users: payload,
      };
    case userTypes.remove:
      return initialState
    case userTypes.addNewRoom:
      return {
        ...state,
        chatRooms: [...state.chatRooms, payload],
      };
    case userTypes.setChatRoom:
      return {
        ...state,
        chatRoom: payload,
      };
    case userTypes.setMessages:
      return {
        ...state,
        messages: payload
      }
      case userTypes.addNewMessage:
        console.log(payload);
        return {
          ...state,
          messages: [...state.messages, payload],
        }
    default:
      return state;
  }
};
