import ApiError from "../exceptions/ApiError.js";
import TokenService from "../services/TokenService.js";

export const authorizationMiddleware = (request, response, next) => {//next вызывает по цепочке следующий middleware
    if (request.method === 'OPTIONS')
        next();

    try {
        const accessToken = request.headers.authorization.split(" ")[1];//достаем токен, и так как нам нужен сам токен, а не его тип то, забираем 2й элемент массива
        if (!accessToken)//проверяем наличие токена
            return next(ApiError.UnauthorizedError());

        const userData = TokenService.validateAccessToken(accessToken);//верифицируем токен
        if (!userData)
            return next(ApiError.UnauthorizedError());

        request.user = userData;//чтобы мы могли использовать эти данные в других функциях

        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}
