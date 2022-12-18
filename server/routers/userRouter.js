import express from 'express';
import UserController from "../controllers/UserController.js";
import {body} from "express-validator";

const userRouter = express.Router();

userRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 20}),
    UserController.registration)

export default userRouter;
