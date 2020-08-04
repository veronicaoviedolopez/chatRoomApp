const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const { registerValidation, loginValidation } = require('../validation');


// REGISTER A NEW USER
router.post("/register", async (req, res) => {
    // Validate the new user
    const { error } = registerValidation(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);
    
    // Checking if the email is already in the db
    const userEmailExist = await User.findOne({ email: req.body.email });
    if (userEmailExist)
        return res.status(400).send("Email already exists");
    
     // Checking if the name is already in the db
     const usernameExist = await User.findOne({ name: req.body.name });
     if (usernameExist)
         return res.status(400).send("Username already exists");
    
    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
   // Create a new user
   const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch(err) {
        res.status(400).send(err);
    }
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
