export const types = {
  addNewRoom: "ADD_CHATROOM",
  setChatRooms: "SET_CHATROOMS"
}

// agrega nuevo chat room
export const addNewRoom = payload => ({
  type: types.addNewRoom,
  payload,
});

// establece la lista de chat rooms
export const setChatRooms = (payload) => ({
  type: types.setChatRooms,
  payload,
});