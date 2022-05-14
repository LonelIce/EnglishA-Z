import Router from 'express';
import {authorizationMiddleware} from "../middlewaree/authorizationMiddleware.js";
import {body} from "express-validator";
import UserController from "../controllers/UserController.js";

const authorizationRouter = new Router();

authorizationRouter.post('/registration',
    body('email').isEmail(),//проверяем является ли поле мылом
    body('password').isLength({min: 6, max: 32}),//проверяем пароль по длине
    UserController.registration);
authorizationRouter.post('/login', UserController.login);//авторизация
authorizationRouter.post('/logout', UserController.logout);//выход
authorizationRouter.get('/activate/:link', UserController.activate);//активация аккаунта по ссылке
authorizationRouter.get('/refresh', UserController.refresh);//перезаписывает токен
authorizationRouter.get('/users', authorizationMiddleware, UserController.getUsers);

export default authorizationRouter;
