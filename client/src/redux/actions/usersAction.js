export const types = {
  set: "SET_CURRENT_USER",
  setUsers: "SET_USERS",
  addNewRoom: "ADD_CHATROOM",
  setChatRoom: "SET_CURRENT_CHATROOM"
};

// Asigna el User
export const setCurrentUser = userLogged => ({
  type: types.set,
  payload: userLogged,
});

// Asigna Usuarios de sala Seleccionada
export const setUsers = users => ({
  type: types.setUsers,
  payload: users,
});

// Asigna nueva sala
export const addNewRoom = payload => ({
  type: types.addNewRoom,
  payload,
});

// Asigna current sala
export const setChatRoom = payload => ({
  type: types.setChatRoom,
  payload,
});