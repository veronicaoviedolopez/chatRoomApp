const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { constants } from '../config/constants';
const User = require("../model/User");
import { registerValidation } from '../middlewares/RegisterValidation';
import { loginValidation } from '../middlewares/LoginValidation';

// REGISTER A NEW USER
router.post("/register", registerValidation, async (req, res) => {
    // Hash passwords
    const hashedPassword = await bcrypt.hash(req.body.password, llamarAlNumeroSalt);
    req.body.password = hashedPassword;

    // Create a new user
    const user = new User(req.body).save()
    .then(data => res.send({ user: user._id }))
    .catch(err => res.status(400).send(err))
});

// LOGIN
router.post("/login", loginValidation, async );

module.exports = router;
