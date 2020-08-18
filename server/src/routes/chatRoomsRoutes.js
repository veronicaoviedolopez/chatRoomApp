import express from 'express';
const router = express.Router();
import verify from '../middlewares/verifyToken';
import createChatRoom from '../controllers/chatRoom/createChatRoom';
import listChatRooms from '../controllers/chatRoom/listChatRooms';
import chatRoomValidation from '../middlewares/ChatRoomValidation';

router.get('/list', [verify, listChatRooms]);
router.post('/create', [verify, chatRoomValidation, createChatRoom]);
export default router;
