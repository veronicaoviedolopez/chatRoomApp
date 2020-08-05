const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const { registerValidation, loginValidation } = require('../middlewares/validation');


// REGISTER A NEW USER
router.post("/register", async (req, res) => {
    // Hash passwords
    const hashedPassword = await bcrypt.hash(req.body.password, llamarAlNumeroSalt);
    req.body.password = hashedPassword;

    // Create a new user
    const user = new User(req.body).save()
    .then(data => res.send({ user: user._id }))
    .catch(err => res.status(400).send(err))
});

// LOGIN
router.post("/login", async (req, res) => {
    // Validate user
    const { error } = loginValidation(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);

    // Checking if the name exists
    const user = await User.findOne({ name: req.body.name });
    if (!user)
        return res.status(400).send("Username or password is wrong");
    
    // Checking if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
        return res.status(400).send("Username or password is wrong");

    // Create and assign a token
    const token = jwt.sign(
        { _id: user._id }, 
        process.env.TOKEN_SECRET
    );

    res.header('auth-token', token);
    res.json({ 
        user: {
            id: user._id, 
            email: user.email , 
            name : user.name
        },
        token });
})



module.exports = router;
