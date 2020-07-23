export const types = {
  set: "SET_CURRENT_USER",
  get: "GET_CURRENT_USER"
}

// Asigna el User
export const setCurrentUser = (user) => ({
  type: types.set,
  payload: user
});

// Obtiene el User
export const getCurrentUser = () => ({
  type: types.get
});