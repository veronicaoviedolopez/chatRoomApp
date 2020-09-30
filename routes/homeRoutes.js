import express from 'express';
const router = express.Router();
import inviteUser from '../controllers/user/inviteUser';

router.get('/invite/user/:user_id/chatroom/:chatroom_id',
    [inviteUser]);

export default router;
