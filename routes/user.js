const express = require('express')
const router = express.Router()
const { Users, WhatsNums } = require('../models')


//create new user by username
router.post('/create/:username', async (req, res) => {
    
    const username = req.params.username
    const newUser = await Users.create({
        username:username
    })

    nums = req.body.whatsnums
    console.log(nums)
    for (const num of nums){
        await WhatsNums.create({
            WhatsNum: num,
            UserId: newUser.id
        })
    }
    res.json('hi')
})

//delete a user by username
router.delete('/delete/:username', async (req, res) => {
    Users.destroy({where: {username: req.params.username}})
    res.json('removed user')
})
module.exports = router