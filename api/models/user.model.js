import mongoose from "mongoose";

//schema creation
const userSchema = new mongoose.Schema({
    username: {
        type: String,   //only string variables can be taken as an input for username
        required: true, //no user can be added to DB without a username
        unique: true,   //every username is unique in the DB
    },
    email: {
        type: String,   //only string variables can be taken as an input for email
        required: true, //no user can be added to DB without a email
        unique: true,   //every email is unique in the DB
    },
    password: {
        type: String,   //only string variables can be taken as an input for password
        required: true, //no user can be added to DB without a password
    }
}, {timestamps: true});   //tells DB to record time of creation and update 

//model creation
const User = mongoose.model('User', userSchema);

export default User; //to use this model anywhere in the app