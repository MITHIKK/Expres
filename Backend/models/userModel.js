const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    username4:String,
    password:String
})

module.exports = mongoose.model('User',userData);