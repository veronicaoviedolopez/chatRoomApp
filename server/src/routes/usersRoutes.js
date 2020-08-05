const express = require('express');
const router = express.Router();
const verify = require('../middlewares/verifyToken');
const listUsers = require('../controllers/user/listUsers');

router.get('/list', listUsers);
router.post('/create', listUsers);
router.put('/', listUsers);
router.deelte('/', listUsers);

module.exports = router;