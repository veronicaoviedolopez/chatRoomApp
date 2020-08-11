export const types = {
  set: "SET_CURRENT_USER",
  get: "GET_CURRENT_USER",
  getUsers: "GET_USERS",
};

// Asigna el User
export const setCurrentUser = token => ({
  type: types.set,
  payload: token,
});

// trae el User logueado
export const getCurrentUser = () => ({
  type: types.get,
});

// trae la lista de usuarios
export const getUsers = () => ({
  type: types.getUsers,
});
