export const types = {
  set: "SET_CURRENT_USER",
  setUsers: "SET_USERS",
};

// Asigna el User
export const setCurrentUser = userLogged => ({
  type: types.set,
  payload: userLogged,
});

// trae la lista de usuarios
export const setUsers = users => ({
  type: types.setUsers,
  payload: users,
});
