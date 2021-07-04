const express = require('express');
const router = express.Router();
const User = require("../model/user")

// add working hours and week
router.post('/register', async (req, res) => {
    const newUser = new User({
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        day: req.body.day
    })
    try {
        const savedPost = await newUser.save();
        res.json(savedPost)
        console.log(newUser)
    }
    catch (error) {
        console.log(error)
        res.json({
            message: "error"

        })

    }


});
router.post('/check', (req, res) => {
    const { day, startTime, endTime } = req.body;
    User.findOne({ day, StartTime, EndTime }).then(user => {
        if (day == monday && day == tuesday && day == wednesday || startTime == '1' && endTime == "2") {
            res.json({
                message: "you can use facebook about 30 m ,insta 1 h and youtube 1:30hr"
            })
            elseif(day == thursday && day == friday || startTime == '7' && endTime == "10") {
                res.json({
                    message: "you can use facebook about 30 m ,insta 1 h and youtube 1:30hr"
                })
                elseif(
                    res.json({
                        message: "you can use facebook about 1 hr ,insta 1:30 h and youtube 2hr"
                    })



                )
            }


        })



    module.exports = router;