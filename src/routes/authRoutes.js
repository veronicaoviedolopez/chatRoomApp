import express from 'express';
const router = express.Router();

import login from '../controllers/auth/login';
import getSession from '../controllers/auth/getSession';
import loginValidation from '../middlewares/LoginValidation';
import verify from '../middlewares/verifyToken';

router.post('/login', [loginValidation, login]);

router.post('/token', [verify, getSession]);

export default router;
