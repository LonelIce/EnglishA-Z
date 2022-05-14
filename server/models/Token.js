import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},//Ссылка на пользователя, второй параметр показывает на какую модель ссылается
        refreshToken: {type: String, required: true}
    }
)

export default mongoose.model("TokenSchema", TokenSchema);
