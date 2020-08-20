import express from 'express';
const router = express.Router();
import verify from '../middlewares/verifyToken';
import createChatRoom from '../controllers/chatRoom/createChatRoom';
import listChatRoomUsers from '../controllers/chatRoom/listChatRoomUsers';
import chatRoomValidation from '../middlewares/ChatRoomValidation';


router.post('/create', [verify, chatRoomValidation, createChatRoom]);
router.get('/list/users/:_id', [verify, listChatRoomUsers]);
export default router;
