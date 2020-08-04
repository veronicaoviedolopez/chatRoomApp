import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import chatRoomReducer from './chatRoomReducer';

export default combineReducers({
	usersReducer,
	chatRoomReducer
});