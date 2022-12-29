import jwt from 'jsonwebtoken';
import TokenModel from '../models/Token.js'

class TokenService {

    generateTokens = (payload) => {
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: '15m'});
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: '30d'});

        return {accessToken, refreshToken};
    }

    saveTokenInDataBase = async (userId, refreshToken) => {
        const tokenData = await TokenModel.findOne({user: userId});
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await TokenModel.create({user: userId, refreshToken: refreshToken});

        return token;
    }

    removeToken = async (refreshToken) => {
        const tokenData = await TokenModel.deleteOne(refreshToken);

        return tokenData;
    }

    validateToken = (token, secretKay) => {
        try {
            const decodedUser = jwt.verify(token, secretKay);
            return decodedUser;
        } catch (e) {
            return null;
        }
    }

    findToken = async (refreshToken) => {
        const tokenData = await TokenModel.findOne({refreshToken});

        return tokenData;
    }

}

export default new TokenService;
