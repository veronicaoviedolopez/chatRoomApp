import { types as userTypes } from "../actions/usersAction";
import jwt from 'jsonwebtoken';

const initialState = {
  isAuth: false,
  user: {name: 'test'},
  users: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      console.log('entro al reducer');
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
