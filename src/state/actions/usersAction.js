export const types = {
  set: "SET_CURRENT_USER",
  get: "GET_CURRENT_USER",
  getUsers: "GET_USERS"
}

// Asigna el User
export const setCurrentUser = (user) => ({
  type: types.set,
  payload: user
});

// trae el User logueado
export const getCurrentUser = () => ({
  type: types.get
});

// trae la lista de usuarios
export const getUsers = () => ({
  type: types.getUsers
});