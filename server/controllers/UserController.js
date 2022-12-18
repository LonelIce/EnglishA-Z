import UserService from "../ services/UserService.js";
import {validationResult} from "express-validator";

class UserController {
    async registration(request,response,next){
        try{
            const errors = validationResult(request);
            if (!errors.isEmpty())
                return response.status(400).json(errors)
            const {email,password}= request.body;
            const userData= await UserService.registration(email,password);

            response.json(userData);
        }catch (e) {
            console.log(e)
            next();
        }
    }
}

export default new UserController;
