import express from 'express';
const router = express.Router();
import verify from '../middlewares/verifyToken';
import listUsers from '../controllers/user/listUsers';

router.get('/list', [verify, listUsers]);
router.post('/create', [verify, login]);
router.patch('/edit/:id', [verify, listUsers]);
router.delete('/delete', [verify, listUsers]);
router.get('/findById/:id', [verify, filtrar]);

export default router;