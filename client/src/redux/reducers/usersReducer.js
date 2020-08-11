import { types as userTypes } from "../actions/usersAction";
import jwt from 'jsonwebtoken';

const initialState = {
  isAuth: false,
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      const user = jwt.decode(payload)
      localStorage.setItem('chatRoomJWT', payload);
      return {
        ...state,
        isAuth: true,
        user,
      };
    case userTypes.get:
      return {
        ...state,
        user: state.user,
      };
    case userTypes.getUsers:
      return {
        ...state,
        users: state.users,
      };
    case userTypes.remove:
      localStorage.removeItem('chatRoomJWT');
      return initialState
    default:
      return state;
  }
};
