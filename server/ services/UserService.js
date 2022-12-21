import User from "../models/User.js";
import bcrypt from "bcrypt";
import UserDto from "../dtos/UserDto.js";

class UserService {
    registration = async (email, password) => {
        const candidateData = await User.findOne({email});
        if (candidateData)
            throw new Error('Пользователь с таким email уже существует');
        const hashPassword = await bcrypt.hash(password, 7);
        const userData = await User.create({email, password: hashPassword});
        const userDto = new UserDto(userData);

        return userDto;
    }

    login = async (email, password) => {
        const userData = await User.findOne({email})
        if (!userData)
            throw new Error('Пользователь с таким email не зарегистрирован');
        const isPasswordEquals = await bcrypt.compare(password, userData.password);
        if (!isPasswordEquals)
            throw new Error('Неверный пароль')
        const userDto = new UserDto(userData);

        return userDto
    }
}

export default new UserService;
