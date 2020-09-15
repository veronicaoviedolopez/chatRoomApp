export const types = {
  set: "SET_CURRENT_USER",
  edit: "EDIT_CURRENT_USER",
  setUsers: "SET_USERS",
  addNewRoom: "ADD_CHATROOM",
  setChatRoom: "SET_CURRENT_CHATROOM",
  setMessages: "SET_MESSAGES",
  reset: "RESET_STORE",
  addNewMessage: "ADD_NEW_MESSAGE",
  setSocket: "SET_SOCKET"
};

// Asigna el current User
export const setCurrentUser = userLogged => ({
  type: types.set,
  payload: userLogged,
});

// Editar el current User
export const editCurrentUser = payload => ({
  type: types.edit,
  payload,
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

// Asigna mensajes de la sala seleccionada
export const setMessages = payload => ({
  type: types.setMessages,
  payload,
});

// Asigna nuevo mensaje
export const addNewMessage = payload => ({
  type: types.addNewMessage,
  payload,
});

// LogOut and reset store
export const logOut = () => ({
  type: types.reset
});

// Asigna el Socket de la sala de ChatRoom seleccionada
export const setSocket = payload => ({
  type: types.setSocket,
  payload
})