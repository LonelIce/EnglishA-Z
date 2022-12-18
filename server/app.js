import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./routers/userRouter.js";
import * as dotenv from 'dotenv'
dotenv.config()

const app =express();

app.use(express.json())

app.use('/user', userRouter);

const start =async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log('Подключились к БД')});

        app.listen(process.env.PORT, ()=>{
            console.log("Сервер работает на ", process.env.PORT," порту")
        });
    }catch (e) {
        console.log(e)
    }
}

start();
