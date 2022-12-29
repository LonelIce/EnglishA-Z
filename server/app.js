import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import userRouter from "./routers/userRouter.js";
import cookieParser from 'cookie-parser';
import errorMiddleware from "./middlewares/errorMiddleware.js";
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser())
app.use(express.json());
app.use('/user', userRouter);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
            console.log('Подключились к БД');
        });

        app.listen(process.env.PORT, () => {
            console.log("Сервер работает на ", process.env.PORT, " порту");
        });
    } catch (e) {
        console.log(e)
    }
}

start();
