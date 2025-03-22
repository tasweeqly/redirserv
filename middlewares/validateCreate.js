const { Users } = require('../models')

const validateCreate = async (req, res, next) => {


    if (req.body.password == 'Me1andyou2.1506122333' && req.body.whatsnums && req.params.username) {
        const doesExist = await Users.findOne({ where: { username: req.params.username } })
        if (doesExist) {
            return res.json('user already exists')
        }
        else{
            return next();
        }
    }
    else {
        res.json('wrong format')
    }
}

module.exports = { validateCreate }