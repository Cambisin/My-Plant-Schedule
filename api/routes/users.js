const express = require("express");
const router = express();
const User = require("../models/users");

router.post("/", async (req, res) => {
    const user = await User({
        username: req.body.username,
        password: req.body.password,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;