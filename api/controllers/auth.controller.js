import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;     //get from req.body
    const hashedPassword = bcryptjs.hashSync(password, 10);     //hashing password
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();   //save to DB
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error);    //sends server error messages to user via middleware
    }
    
};