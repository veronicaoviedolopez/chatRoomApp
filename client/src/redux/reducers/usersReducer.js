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
      case userTypes.setUserToken:
        return {
          ...state,
          user: payload,
          isAuth: true,
        };
      case userTypes.setCountNewMessages:
        const chatroom = state.chatRooms.find(chatroom => chatroom._id === payload)
        return {
          ...state,
          chatRooms: [
            { ...chatroom, count: chatroom.count ? ++chatroom.count : 1},
            ...state.chatRooms.filter(p => p!== chatroom), 
           ]
        };
        case userTypes.resetCountNewMessages:
          const chat = state.chatRooms.find(chatroom => chatroom._id === payload)
          delete chat.count; 
          return {
            ...state,
            chatRooms: [ 
              { ...chat}, 
              ...state.chatRooms.filter(p => p!== chat)]
          }
    default:
      return state;
  }
};
