import express from 'express';
import mongoose from 'mongoose';
import wordRouter from "./routers/wordRouter.js";
import cors from 'cors'
import constructionRouter from "./routers/constructionsRouter.js";

const PORT = 2000;
const DB_URL = 'mongodb+srv://User:user@cluster0.qsyng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/word', wordRouter);
app.use('/construction',constructionRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser:true}); //подключаемся к базе данных 1й параметр - url базы
        app.listen(PORT, () => {
            console.log("SERVER STARTED ON PORT ", PORT)
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();
