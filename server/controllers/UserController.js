import UserService from "../services/UserService.js";
import {validationResult} from "express-validator";
import ApiError from "../exceptions/ApiError.js";

class UserController {
    async registration(request, response, next) {
        try {
            const errors = validationResult(request);//атоматически выхватит body
            if (!errors.isEmpty())
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));//возврашаем ошибку через middleware

            const {email, password} = request.body;
            const userData = await UserService.registration(email, password);

            response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});//Работает благодаря middlrware в app.js, 1й- ключ под каким он будет сохраняться, 2й сама кука, 3й- опции: maxAge-время жизни,httpOnly: true- чтобы куку нельзя было получать и изменять внутри браузера

            return response.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(request, response, next) {
        try {
            const {email, password} = request.body;
            const userData = await UserService.login(email, password);

            response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});//Работает благодаря middlrware в app.js, 1й- ключ под каким он будет сохраняться, 2й сама кука, 3й- опции: maxAge-время жизни,httpOnly: true- чтобы куку нельзя было получать и изменять внутри браузера

            return response.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async logout(request, response, next) {
        try {
            const {refreshToken} = request.cookies;//достаем из куки refreshToken
            const token = await UserService.logout(refreshToken);//по сути удаляем токен из бд

            response.clearCookie('refreshToken')//удаляем куку

            response.status(200).json(token);
        } catch (e) {
            next(e)
        }
    }

    async activate(request, response, next) {
        try {
            const link = request.params.link;//достаем ссылку из параметров
            await UserService.activate(link);

            return response.redirect(process.env.CLIENT_URL)//редиректим пользователя на определенную странице после активации
        } catch (e) {
            next(e)
        }
    }

    async refresh(request, response, next) {//обновляет токен если у него загончился срок и про другим причинам
        try {
            const {refreshToken} = request.cookies;//достаем из куки refreshToken
            const userData = await UserService.refresh(refreshToken);

            response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

            return response.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async getUsers(request, response) {
        try {
            const users = await UserService.getUsers();
            response.json(users);
        } catch (e) {
            console.log(e)
        }
    }
}

export default new UserController();
