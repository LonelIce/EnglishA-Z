import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exceptions/ApiError.js";
import TokenService from "./TokenService.js";

class UserService {
    registration = async (email, password) => {
        const candidateData = await UserModel.findOne({email});
        if (candidateData)
            throw ApiError.BadRequest('Пользователь с таким email уже зарегистрирован');

        const hashPassword = await bcrypt.hash(password, 7);
        const userData = await UserModel.create({email, password: hashPassword});

        const returnData = await this.#createDtoGenerateAndSaveTokens(userData);

        return {...returnData};
    }

    login = async (email, password) => {
        const userData = await UserModel.findOne({email});
        if (!userData)
            throw ApiError.BadRequest('Пользователь с таким email не зарегистрирован');

        const isPasswordEquals = await bcrypt.compare(password, userData.password);
        if (!isPasswordEquals)
            throw ApiError.BadRequest('Неверный пароль');

        const returnData = await this.#createDtoGenerateAndSaveTokens(userData);

        return {...returnData};
    }

    logout = async (refreshToken) => {
        if (!refreshToken)
            throw ApiError.UnauthorizedError();
        const token = await TokenService.removeToken({refreshToken});
        return token;
    }

    refresh = async (refreshToken) => {
        if (!refreshToken)
            throw ApiError.UnauthorizedError();
        const userData = TokenService.validateToken(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);
        const tokenData = await TokenService.findToken(refreshToken);
        if (!userData || !tokenData)
            throw ApiError.UnauthorizedError();

        const user = await UserModel.findById(userData.id);

        const returnData = await this.#createDtoGenerateAndSaveTokens(user);

        return {...returnData};

    }

    #createDtoGenerateAndSaveTokens = async (userModel) => {
        const userDto = new UserDto(userModel);
        const tokens = TokenService.generateTokens({...userDto});
        await TokenService.saveTokenInDataBase(userDto.id, tokens.refreshToken);

        return {tokens, user: userDto};
    }


}

export default new UserService;
