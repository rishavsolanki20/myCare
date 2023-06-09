const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is require']
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    }
})
const userModel = mongoose.model('user', userSchema)

module.exports = userModel