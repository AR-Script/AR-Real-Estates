import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) => {
    const {email, password} = req.body;     // authenticate user by email and password
    try {
        const validUser = await User.findOne({ email });     //find user by email
        if (!validUser) return next(errorHandler(404,'User not found!'));     //if user not found, send 404 error
        const validPassword = bcryptjs.compareSync(password, validUser.password);   //compare user input password against DB password
        if (!validPassword) return next(errorHandler(401,'Wrong credentials!'));     //if password is incorrect, send 401 error
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);     //sign token
        const { password: pass, ...rest } = validUser._doc;     //set user info as 'rest' with the exception of password while returning
        //set the authentication token inside a cookie
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);    //sends server error messages to user via middleware
    }
};