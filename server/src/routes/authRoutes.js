import express from 'express';
const router = express.Router();

import login from '../controllers/auth/login';
import loginValidation from '../middlewares/LoginValidation';

router.post('/login', [loginValidation, login]);

export default router;
