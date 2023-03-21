const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        require: true,
        min: 4,
        max: 255
    }
})

module.exports = mongoose.model('User', userSchema)
