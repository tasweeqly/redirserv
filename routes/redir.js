const express = require('express')
const router = express.Router()
const { Users, WhatsNums } = require('../models')


router.get('/:username', async (req, res) => {
        const username = await Users.findOne({where: {username: req.params.username}})
})

module.exports = router