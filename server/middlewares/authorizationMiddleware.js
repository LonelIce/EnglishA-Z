import ApiError from "../exceptions/ApiError.js";
import TokenService from "../ services/TokenService.js";

const authorizationMiddleware = (request, response, next) => {
    try {
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader)
            return next(ApiError.UnauthorizedError());

        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken)
            return next(ApiError.UnauthorizedError());

        const userData = TokenService.validateToken(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);
        if (!userData)
            return next(ApiError.UnauthorizedError());

        request.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}

export default authorizationMiddleware;
