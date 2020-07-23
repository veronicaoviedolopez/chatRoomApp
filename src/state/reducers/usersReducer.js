import { types as userTypes } from "../actions/usersAction";

const initialState = {
  user: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      return {
        ...state,
        user: payload
      }
    case userTypes.get:
      return{
        ...state,
        user: state.user
      }
    default:
      return state
  }
};
