const { Users } = require('../models')

//check if the accessed url exists in the db
const validateUser = async (req, res, next) => {
    const username = await Users.findOne({ where: { username: req.params.username } })
    if (username){
        return next();
    }
    else {
        return res.json('not found')
    }
}

module.exports = { validateUser }