import express from 'express';
import UserController from "../controllers/UserController.js";
import {body} from "express-validator";
import authorizationMiddleware from "../middlewares/authorizationMiddleware.js";

const userRouter = express.Router();

userRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 20}),
    UserController.registration)
userRouter.post('/login', UserController.login);
userRouter.get('/logout', UserController.logout);
userRouter.get('/refresh', UserController.refresh);
userRouter.post('/changeUserData', authorizationMiddleware, body('newEmail').isEmail(), UserController.changeUserData);

export default userRouter;
