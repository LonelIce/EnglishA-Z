import UserService from "../ services/UserService.js";
import {validationResult} from "express-validator";
import ApiError from "../exceptions/ApiError.js";
import {MILLISECONDS_IN_DAY} from "../constans.js";

class UserController {
    registration = async (request, response, next) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty())
                return next(ApiError.BadRequest('Ошибка валидации данных', errors.array()));
            const {email, password} = request.body;
            const userData = await UserService.registration(email, password);

            response.cookie('refreshToken', userData.tokens.refreshToken, {
                maxAge: 15 * MILLISECONDS_IN_DAY,
                httpOnly: true
            });

            return response.json(userData);
        } catch (e) {
            next(e);
        }
    }

    login = async (request, response, next) => {
        try {
            const {email, password} = request.body;
            const userData = await UserService.login(email, password);

            response.cookie('refreshToken', userData.tokens.refreshToken, {
                maxAge: 15 * MILLISECONDS_IN_DAY,
                httpOnly: true
            });

            return response.json(userData);
        } catch (e) {
            next(e);
        }
    }

    logout = async (request, response, next) => {
        try {
            const {refreshToken} = request.cookies;
            const tokenData = await UserService.logout(refreshToken);

            response.clearCookie('refreshToken');

            return response.status(200).json(tokenData);

        } catch (e) {
            next(e);
        }
    }

    refresh = async (request, response, next) => {
        try {
            const {refreshToken} = request.cookies;
            const userData = await UserService.refresh(refreshToken);

            response.cookie('refreshToken', userData.tokens.refreshToken, {
                maxAge: 15 * MILLISECONDS_IN_DAY,
                httpOnly: true
            });

            return response.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController;
