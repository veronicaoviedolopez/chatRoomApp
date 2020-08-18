export const types = {
  getChatRooms: "GET_CHATROOMS",
  setChatRooms: "SET_CHATROOMS"
}

// trae la lista de chat rooms
export const getChatRooms = () => ({
  type: types.getChatRooms
});

// establece la lista de chat rooms
export const setChatRooms = (payload) => ({
  type: types.setChatRooms,
  payload,
});