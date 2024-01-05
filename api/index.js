import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

//to connect to MongoDB
mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB!');  //to check if it connection to MongoDB is successful
    }).catch(() => {
        console.log(err); //to catch the error if connection to MongoDB is unsuccessful
    })

const app = express();

app.use(express.json()); //allow json input to server

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);