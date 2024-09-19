const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required:false,
        default:null,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;