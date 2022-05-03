import Router from 'express';
import ConstructionController from "../controllers/ConstructionController.js";

const  constructionRouter = new Router();

constructionRouter.post('/', ConstructionController.create);
constructionRouter.get('/', ConstructionController.getAll);
constructionRouter.get('/:id',ConstructionController.getOne);
constructionRouter.put('/', ConstructionController.update);
constructionRouter.delete('/:id', ConstructionController.delete);

/*constructionRouter.delete('/',ConstructionController.deleteAll);*/

export default constructionRouter;