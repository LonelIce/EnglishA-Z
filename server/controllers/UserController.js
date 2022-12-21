import UserService from "../ services/UserService.js";
import {validationResult} from "express-validator";
import ApiError from "../exceptions/ApiError.js";

class UserController {
    registration = async (request, response, next) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty())
                return next(ApiError.BadRequest('Ошибка валидации данных', errors.array()));
            const {email, password} = request.body;
            const userData = await UserService.registration(email, password);

            response.json(userData);
        } catch (e) {
            next(e);
        }
    }

    login = async (request, response, next) => {
        try {
            const {email, password} = request.body;
            const userData = await UserService.login(email, password);

            response.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController;
