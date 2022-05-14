import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import 'dotenv/config';//для доступа к переменным хранящимся в .enw
import constructionRouter from "./routers/constructionsRouter.js";
import wordRouter from "./routers/wordRouter.js";
import authorizationRouter from "./routers/authorizationRouter.js";
import ErrorMiddleware from "./middlewaree/ErrorMiddleware.js";

const PORT = process.env.PORT || 2000;//достаем переменную из .env

const app = express();
app.use(express.json());//позволяет парсить JSON
app.use(cookieParser());
app.use(cors());
app.use('/word', wordRouter);
app.use('/construction', constructionRouter);
app.use('/api', authorizationRouter);
app.use(ErrorMiddleware);//должен идти последним

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true}); //подключаемся к базе данных 1й параметр - url базы
        app.listen(PORT, () => {
            console.log("SERVER STARTED ON PORT ", PORT)
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();
