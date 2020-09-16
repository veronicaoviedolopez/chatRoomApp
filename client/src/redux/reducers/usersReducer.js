import { types as userTypes } from "../actions/usersAction";

const initialState = {
  isAuth: false,
  user: {},
  users: [],
  chatRoom: {},
  chatRooms: [],
  messages: [],
  socket: {}
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
      case userTypes.edit:
      return {
        ...state,
        user: payload,
      };
    case userTypes.setUsers:
      return {
        ...state,
        users: payload,
      };
    case userTypes.reset:
      return initialState;
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
      return {
        ...state,
        messages: [...state.messages, payload],
      }
    case userTypes.setSocket:
      return {
        ...state,
         socket: payload,
      };
      case userTypes.setUserToken:
        return {
          ...state,
          user: payload,
          isAuth: true,
        };
    default:
      return state;
  }
};
