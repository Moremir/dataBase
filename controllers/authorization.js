const { User } = require('../model/user')

async function registerUser(req, res) {
    const {name, email, password} = req.body;
    if (!name.trim() || !email.trim() || !password.trim()) {
        return res.status(400).json({
            message: 'Indicate empty field'
        })
    }

    const existingUser = await User.findOne({email})
    
    if (existingUser) {
        return res.status(400).json("Such user is already created")
    }

    const user = await User.create(req.body)

    return res.status(200).json({
        message: "User is successfully created",
        user: user
    })
}

module.exports = {
    registerUser
}