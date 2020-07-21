import { types as userTypes } from "../actions/usersAction";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      return {
        user: payload
      }

    default:
      return state;
  }
};
