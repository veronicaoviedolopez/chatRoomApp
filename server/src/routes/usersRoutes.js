import express from 'express';
const router = express.Router();

import verify from '../middlewares/verifyToken';
import createUser from '../controllers/user/createUser';
import editUser from '../controllers/user/editUser';
import deleteUser from '../controllers/user/deleteUser';
import findUser from '../controllers/user/findUser';
import addChatRoom from '../controllers/user/addChatRoom';
import listChatRooms from '../controllers/user/listChatRooms';
import registerValidation from '../middlewares/RegisterValidation';
import infoInvite from '../controllers/user/InfoInvite';

router.post('/create', [registerValidation, createUser]);
router.patch('/edit/:_id', [verify, editUser]);
router.delete('/delete/:id', [verify, deleteUser]);
router.get('/find/:id', [verify, findUser]);
router.patch('/addChatRoom/:id', [verify, addChatRoom]);
router.get('/list/chatrooms/:_id', [verify, listChatRooms]);
router.get('/invite/:_id/chatroom/:_idchatroom', infoInvite);
export default router;
