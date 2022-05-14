import mongoose from 'mongoose';

const User = new mongoose.Schema(
    {
        email: {type: String, unique: true, required: true},
        /*username:{type:String,unique:true, required:true},//второй параметр говорит об уникальности*/
        password: {type: String, required: true},
        isActivated: {type: Boolean, default: false},//подтвердил ли пользователь почту
        activationLink: {type: String},//для хранения ссылки активации
        roles: [{type: String, ref: 'Role'}]
    }
)

export default mongoose.model("User", User);

