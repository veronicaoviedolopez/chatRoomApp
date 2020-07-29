import { types as userTypes } from "../actions/usersAction";

const initialState = {
  currentUser: {
    id: 1,
    username: "VeronicaOviedo",
    email: "veronica@gmail.com",
  },
  users: [
    {
      id: 1,
      username: "VeronicaOviedo (Yo)",
      email: "veronica@gmail.com",
    },
    {
      id: 2,
      username: "Sanderson",
      email: "Sanderson@gmail.com",
    },
    {
      id: 3,
      username: "Weaver",
      email: "Weaver@gmail.com",
    },
    {
      id: 4,
      username: "NightBlood",
      email: "NightBlood@gmail.com",
    },
    {
      id: 5,
      username: "Sanderson",
      email: "Sanderson@gmail.com",
    },
    {
      id: 6,
      username: "Weaver",
      email: "Weaver@gmail.com",
    },
    {
      id: 7,
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
