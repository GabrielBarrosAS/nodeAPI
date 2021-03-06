import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User