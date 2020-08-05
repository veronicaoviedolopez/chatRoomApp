export const types = {
  set: "SET_CURRENT_USER",
  get: "GET_CURRENT_USER",
  getUsers: "GET_USERS",
};

// Register a New User
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/register",
        user
      );
      user.id = res.data.user;
      delete user.password;
      dispatch(setCurrentUser(user));
    } catch (err) {
      // manejar errores
    }
  };
};

// Asigna el User
export const setCurrentUser = (token) => ({
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
