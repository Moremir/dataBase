const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('user', userSchema); //collections

module.exports = {
    User
}