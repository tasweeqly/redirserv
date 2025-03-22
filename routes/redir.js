const express = require('express')
const router = express.Router()
const { Users, WhatsNums, Ips } = require('../models')
const { validateUser } = require('../middlewares/validateUser')


router.get('/:username', validateUser, async (req, res) => {
    //search for the username in the database
    const username = await Users.findOne({ where: { username: req.params.username } })
    //bypass the nginxs reverse proxy
    const clientIp = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0].trim() : req.ip;
    //res.send(`Your IP address is: ${req.ip} , Your real IP address is: ${clientIp}`);

    //search the database if the client ip was already assigned to a whatsapp number
    ipdb = await Ips.findOne({ where: { UserId: username.id, Ip: clientIp } });

    whatsNum = null
    //if the client was already assigned to a number
    if (ipdb) {
        whatsNum = await WhatsNums.findOne({ where: { id: ipdb.WhatsNumId } })
        whatsNum = whatsNum.WhatsNum
        console.log(`ip found :${whatsNum}`)
    }
    else {
        //search the database for all the available whatsapp numbers
        availableWhatsNums = await WhatsNums.findAll({ attributes: ['id'], raw: true })
        //change the returned object to an array of ids
        const idList = availableWhatsNums.map(item => item.id);
        //assign new whatsapp number randomly
        const assignedWhatsNum = await WhatsNums.findOne({ where: { id: idList[Math.floor(Math.random() * idList.length)] } })
        console.log(assignedWhatsNum.WhatsNum)

        //write the new assigned whatsapp number and ip to the database
        ipnew = await Ips.create({
            Ip: clientIp,
            WhatsNumId: assignedWhatsNum.id,
            UserId: username.id
        })
        whatsNum = await WhatsNums.findOne({ where: { id: ipnew.WhatsNumId } })
        whatsNum = whatsNum.WhatsNum
        console.log(`ip was not found, created new ip and assigned: ${whatsNum}`)
    }
    Ips.destroy({ where: { UserId: username.id } })
    return res.redirect(whatsNum)
})

module.exports = router