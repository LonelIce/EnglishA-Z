import {Schema, model} from 'mongoose';

const tokenSchema = new Schema({
        user: {type: String, unique: true, required: true},
        refreshToken: {type: String, required: true}
    }
)

export default model('Token', tokenSchema);
