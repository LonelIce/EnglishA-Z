import mongoose from 'mongoose';

const Word = new mongoose.Schema({
    word: {type: String, required: true},//required:true означает что они будут обязательными
    translation: {type: String, required: true},
    partOfSpeech: {type: String, required: true},
})

export default mongoose.model('Word', Word);
