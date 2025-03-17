const express = require('express')
const router = express.Router()
const { Users, WhatsNums } = require('../models')


router.get('/:username', async (req, res) => {
    const username = await Users.findOne({ where: { username: req.params.username } })
    const clientIp = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0].trim() : req.ip;
    res.send(`Your real IP address is: ${clientIp}`);

})

module.exports = router