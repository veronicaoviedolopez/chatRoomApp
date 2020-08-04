const express = require('express');
const router = express.Router();
const User = require('../model/User');
const verify = require('../verifyToken');

// Get All Users
router.get('/', verify, async (req, res) => {
    try {
        console.log(req.user);
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.json({ message: err});
    }
});

//Get Specific User
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch(err) {
        res.json({ message: err});
    }
});


//Delete User
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id : req.params.userId });
        res.json(removedUser);
    } catch(err) {
        res.json({ message: err});
    }
});


// Update User
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id : req.params.userId }, 
            { $set: {
                name: req.body.name,
                email : req.body.email
            }});
        res.json(updatedUser);
    } catch(err) {
        res.json({ message: err});
    }
});

module.exports = router;