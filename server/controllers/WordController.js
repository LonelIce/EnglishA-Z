import WordService from "../services/WordService.js";

class WordController {
    async create(request, response) {//функция создания
        try {
            const word1 = await WordService.create(request.body)
            response.json(word1)//сервер вернет код 200 и данные "Сервер работает"
        } catch (e) {
            response.status(500).json(e)//возвращаем 500 и саму ошибку
        }
    }

    async getAll(request, response) {
        try {
            const words = await WordService.getAll();
            return response.json(words)
        } catch (e) {
            response.status(500).json(e)
        }
    }

    async getOne(request, response) {
        try {
            const word = await WordService.getOne(request.params.id)
            return response.json(word)
        } catch (e) {
            response.status(500).json(e.message)//возвращаем 500 и саму ошибку
        }
    }

    async update(request, response) {
        try {
            const updatedWord = await WordService.update(request.body);
            return response.json(updatedWord);
        } catch (e) {
            response.status(500).json(e.message)//возвращаем 500 и саму ошибку
        }
    }

    async delete(request, response) {
        try {
            const word = await WordService.delete(request.params.id)
            return response.json(word)
        } catch (e) {
            response.status(500).json(e.message)//возвращаем 500 и саму ошибку
        }
    }

    //удаляет всё
    async deleteAll(request, response) {
        try {
            const words = await WordService.deleteAll();
            return response.json(words)
        } catch (e) {
            response.status(500).json(e)
        }
    }
}

export default new WordController();