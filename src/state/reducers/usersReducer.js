import { types as userTypes } from "../actions/usersAction";

const initialState = {
  currentUser: {
    username: "test",
    email: "",
  },
  users: [
    {
      username: "VeronicaOviedo (Yo)",
      email: "veronica@gmail.com",
    },
    {
      username: "Sanderson",
      email: "Sanderson@gmail.com",
    },
    {
      username: "Weaver",
      email: "Weaver@gmail.com",
    },
    {
      username: "NightBlood",
      email: "NightBlood@gmail.com",
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.set:
      return {
        ...state,
        currentUser: payload,
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
    default:
      return state;
  }
};
