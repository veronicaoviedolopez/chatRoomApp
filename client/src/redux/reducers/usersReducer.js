import { types as userTypes } from "../actions/usersAction";
import jwt from 'jsonwebtoken';

const initialState = {
  isAuth: false,
  user: null,
  users: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      localStorage.setItem('chatRoomJWT', payload.token);
      return {
        ...state,
        isAuth: true,
        user: payload.user,
      };
    case userTypes.setUsers:
      return {
        ...state,
        users: payload,
      };
    case userTypes.remove:
      localStorage.removeItem('chatRoomJWT');
      return initialState
    default:
      return state;
  }
};
