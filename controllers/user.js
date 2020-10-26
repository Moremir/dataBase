const {User} = require('../model/user')

async function getUsers(req, res) {
    const users = await User.find();
    
    return res.status(200).json(users)
}

module.exports = {
    getUsers
}