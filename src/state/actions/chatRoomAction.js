export const types = {
  getChatRooms: "GET_CHATROOMS"
}

// trae la lista de chat rooms
export const getChatRooms = () => ({
  type: types.getChatRooms
});