export const types = {
  set: "SET_CURRENT_USER",
  edit: "EDIT_CURRENT_USER",
  setUsers: "SET_USERS",
  addNewRoom: "ADD_CHATROOM",
  setChatRoom: "SET_CURRENT_CHATROOM",
  setMessages: "SET_MESSAGES",
  reset: "RESET_STORE",
  addNewMessage: "ADD_NEW_MESSAGE",
  setUserToken: "SET_USER_TOKEN",
  setCountNewMessages: "SET_COUNT_NEW_MESSAGES",
  resetCountNewMessages: "RESET_COUNT_NEW_MESSAGES"
};

// Asigna el current User
export const setCurrentUser = userLogged => ({
  type: types.set,
  payload: userLogged,
});

// Asigna el token User
export const setUserToken = payload => ({
  type: types.setUserToken,
  payload,
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


// Actualiza contador de mensajes sin visualizar por chatroom
export const setCountNewMessages = payload => ({
  type: types.setCountNewMessages,
  payload,
});

// Resetea contador de mensajes sin visualizar por chatroom
export const resetCountNewMessages = payload => ({
  type: types.resetCountNewMessages,
  payload,
})