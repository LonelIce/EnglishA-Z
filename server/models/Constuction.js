import mongoose from 'mongoose';

const Construction = new mongoose.Schema(
    {
        construction: {type: String, required: true},
        translation: {type: String, required: true},
        wordCount: {type: String, required: true}
    }
)

export default mongoose.model("Construction", Construction);
