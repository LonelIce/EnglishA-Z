import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {v4 as uuidv4} from 'uuid';
import MailService from "./MailService.js";
import TokenService from "./TokenService.js";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exceptions/ApiError.js";

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({email});//ищем совпадения а бд, дабы не зарегистрировать уже существующего пользователя
        if (candidate)
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
        const hashPassword = await bcrypt.hash(password, 7);//хешируем пароль 1й параметр сам парольб 2й-степень хеширования, чем больше тем сложнее его хешировать
        const activationLink = uuidv4();//генерируем строку (ссылка для активации)
        const user = await User.create({email, password: hashPassword, activationLink});//сохраняем пользователя в БД
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);//отправляем письмо для подверждения
        const userDto = new UserDto(user);//создаем dto чтобы выкинуть из модели ненужные поля
        const token = TokenService.generateTokens({...userDto})//генерируем токен
        await TokenService.saveToken(userDto.id, token.refreshToken);//сохраняем токен

        return {...token, user: userDto}
    }


    async activate(activationLink) {
        const user = await User.findOne({activationLink});
        if (!user)
            throw ApiError.BadRequest('Некоректная ссылка активации');
        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await User.findOne({email});//проверяем существует ли такой пользователь
        if (!user)
            throw  ApiError.BadRequest('Пользователь с таким email не зарегистрирован');

        const isPasswordEquals = await bcrypt.compare(password, user.password);//проверяем равенство захешированых паролей
        if (!isPasswordEquals)
            throw ApiError.BadRequest('Неверный пароль');

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});//генерируем токен
        await TokenService.saveToken(userDto.id, tokens.refreshToken);//сохраняем токен в БД

        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken);//удаляем токен из БД

        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken)//смотрим чё там упало
            throw ApiError.UnauthorizedError();
        const userData = await TokenService.validateRefreshToken(refreshToken);//получаем верифицировный токен
        const tokenFromDb = await TokenService.findToken(refreshToken);//получаем токен из БД
        if (!userData || !tokenFromDb)//проверяем совпадают ли пришедший  и токен хранящийся в БД
            throw ApiError.UnauthorizedError();

        const user = await User.findById(userData.id);//на случай ксли данные поменялись находим пользователя
        const userDto = new UserDto(user);//и генерируем новые токины
        const tokens = TokenService.generateTokens({...userDto});//генерируем токен
        await TokenService.saveToken(userDto.id, tokens.refreshToken);//сохраняем токен в БД

        return {...tokens, user: userDto}
    }

    async getUsers() {
        const users = await User.find();//получаем псех юзеров
        return users;
    }

}

export default new UserService;