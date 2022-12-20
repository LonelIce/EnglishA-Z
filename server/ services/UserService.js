import User from "../models/User.js";
import bcrypt from "bcrypt";
import UserDTO from "../dtos/UserDTO.js";

class UserService {
    async registration(email, password) {
        const candidateData = await User.findOne({email});
        if (candidateData)
            throw new Error('Пользователь с таким email уже существует');
        const hashPassword=await bcrypt.hash(password,7);
        const userData= await User.create({email,password:hashPassword});
        const userDTO= new UserDTO(userData);

        return userDTO;
    }
}

export default new UserService;
