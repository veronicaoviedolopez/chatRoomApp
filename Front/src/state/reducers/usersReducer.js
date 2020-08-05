import { types as userTypes } from "../actions/usersAction";

const initialState = {
  isAuth: false,
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:

      // descargar paquete jsonwebtoken
      // decodear token

      const user = jwt.decode(payload)

      localStorage.setItem('chatRoomJWT', payload);
      return {
        isAuth: true,
        user,
      };
    case userTypes.get:
      return {
        ...state,
        currentUser: state.currentUser,
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
