import express from 'express';
const router = express.Router();

import verify from '../middlewares/verifyToken';
import  listUsers  from '../controllers/user/listUsers';
import  createUser  from '../controllers/user/createUser';
import  editUser  from '../controllers/user/editUser';
import  deleteUser  from '../controllers/user/deleteUser';
import findUser  from '../controllers/user/findUser';

import  registerValidation  from '../middlewares/RegisterValidation';

router.get('/list', [verify, listUsers]);
router.post('/create', [ registerValidation, createUser]);
router.patch('/edit/:id', [verify, editUser]);
router.delete('/delete/:id', [verify, deleteUser]);
router.get('/find/:id', [verify, findUser]);

export default router;