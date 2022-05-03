import Router from 'express';
import WordController from "../controllers/WordController.js";

const wordRouter = new Router();

wordRouter.post('/', WordController.create)//создание
wordRouter.get('/', WordController.getAll)// получение всех постов
wordRouter.get('/:id', WordController.getOne)//получение одного поста по id
wordRouter.put('/', WordController.update)//обновление
wordRouter.delete('/:id', WordController.delete)// удаление

//удаляет всё
/*router.delete('/', WordController.deleteAll)*/

export default wordRouter;