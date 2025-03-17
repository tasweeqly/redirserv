const express = require('express')
const router = express.Router()
const { Users, WhatsNums } = require('../models')


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
})

module.exports = router