const { Users } = require('../models')

const validateDelete = async (req, res, next) => {


    if (req.body.password == 'Me1andyou2.1506122333' && req.params.username) {
        const doesExist = await Users.findOne({ where: { username: req.params.username } })
        if (doesExist) {
            return next();
            
        }
        else{
            return res.json('user doesnt exist')
        }
    }
    else {
        res.json('wrong format')
    }
}

module.exports = { validateDelete }