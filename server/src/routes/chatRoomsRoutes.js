import express from 'express';
const router = express.Router();
import verify from '../middlewares/verifyToken';
import createChatRoom from '../controllers/chatRoom/createChatRoom';
import selectChatRoom from '../controllers/chatRoom/selectChatRoom';
import chatRoomValidation from '../middlewares/ChatRoomValidation';

import createMessage from '../controllers/messages/createMessage';
import listMessages from '../controllers/messages/listMessages';
import messageValidation from '../middlewares/MessageValidation';

router.post('/create', [verify, chatRoomValidation, createChatRoom]);
router.get('/select/:_id', [verify, selectChatRoom]);

router.post('/message/create', [verify, messageValidation, createMessage]);
router.get('/:id/messages', [verify, listMessages]);
export default router;
