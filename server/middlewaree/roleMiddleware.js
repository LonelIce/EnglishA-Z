import jwt from 'jsonwebtoken';
import {secret} from "../config.js";

export const roleMiddleware = (roles) => {
    return (request, response, next) => {
        if (request.method === 'OPTIONS')
            next();

        try {
            const token = request.headers.authorization.split(' ')[1];
            if (!token)
                response.status(403).json({message: "Пользователь не авторизован"})

            const {roles: userRoles} = jwt.verify(token, secret);

            let hasRole = false;
            userRoles.forEach(role => {//проверяем содержит ли массив ролей пользователя хотя бы одну роль которая разрешена для данной функции
                if (roles.includes(role))
                    hasRole = true;
            })
            if (!hasRole)
                response.status(403).json({message: "У вас нет доступа"})
            next();

        } catch (e) {
            console.log(e);
            response.status(403).json({message: "Пользователь не авторизован"})
        }
    }
}
