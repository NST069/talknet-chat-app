const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate:{
        type: Date,
        required: true,
        default: Date.Now
    },
    currentRoom: {
        type: String
    }
});

module.exports = mongoose.model("user", userSchema);