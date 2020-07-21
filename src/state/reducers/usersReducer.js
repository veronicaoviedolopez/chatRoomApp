import {
  Set_User,
  _Success,
  _Error,
} from "../actions/usersAction.js";

const initialState = {
  user: {
    username: "",
    password: ""
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Set_User:
      return {
        ...state,
        user: action.user,
      };
    case _Success:
      return {
        ...state,
        user: action.user,
      };
    case _Error:
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
