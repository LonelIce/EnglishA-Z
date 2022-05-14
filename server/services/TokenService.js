import jwt from 'jsonwebtoken';
import Token from "../models/Token.js";

class TokenService {

    //генерирует токены
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({user: userId});//проверяем существует ли уже такой токен в БД
        if (tokenData) {
            tokenData.refreshToken = refreshToken;//перезаписываем токен
            return tokenData.save();
        }
        const token = await Token.create({user: userId, refreshToken});
        return token;

    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);//верифицируем токен
            return userData;
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN);//верифицируем токен
            return userData;
        } catch (e) {
            return null;
        }
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.deleteOne({refreshToken});

        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({refreshToken});//находим токен в БД
        return tokenData;
    }

}

export default new TokenService;