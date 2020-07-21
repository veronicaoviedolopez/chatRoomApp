export const types = {
  set: "SET_CURRENT_USER"
}

// 
export const setCurrentUser = (user) => ({
  type: types.set,
  payload: user
});