import Word from "../models/Word.js";

class WordService {
    async create(word) {
        const createdWord = await Word.create(word);
        return createdWord;
    }

    async getAll() {
        const words = await Word.find();
        return words;
    }

    async getOne(id) {
        if (!id) {//проверяем существует ли ID
            throw new Error('Id не указан')
        }
        const word = await Word.findById(id);//осуществляем поиск по ID
        return word;
    }

    async update(word) {
        if (!word._id) throw new Error('Id не указан');
        const updatedWord = await Word.findByIdAndUpdate(word._id, word, {new: true})
        return updatedWord;
    }

    async delete(id) {
        if (!id) throw new Error('Id не указан');
        const word = await Word.findByIdAndDelete(id);
        return word
    }

    //удаляет всё
    async deleteAll() {
        const words = await Word.deleteMany({});
        return words;
    }
}

export default new WordService();
