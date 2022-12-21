import User from "../models/User.js";
import bcrypt from "bcrypt";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exceptions/ApiError.js";

class UserService {
    registration = async (email, password) => {
        const candidateData = await User.findOne({email});
        if (candidateData)
            throw ApiError.BadRequest('Пользователь с таким email уже зарегистрирован');

        const hashPassword = await bcrypt.hash(password, 7);
        const userData = await User.create({email, password: hashPassword});
        const userDto = new UserDto(userData);

        return userDto;
    }

    login = async (email, password) => {
        const userData = await User.findOne({email});
        if (!userData)
            throw ApiError.BadRequest('Пользователь с таким email не зарегистрирован');

        const isPasswordEquals = await bcrypt.compare(password, userData.password);
        if (!isPasswordEquals)
            throw ApiError.BadRequest('Неверный пароль');

        const userDto = new UserDto(userData);

        return userDto;
    }
}

export default new UserService;
