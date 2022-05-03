import ConstructionService from "../services/ConstructionService.js";

class ConstructionController {
    async create(request, response) {
        try {
            const newConstruction = await ConstructionService.create(request.body);
            response.json(newConstruction);
        } catch (e) {
            response.status(500).json(e);
        }
    }

    async getAll(request, response) {
        try {
            const constructions = await ConstructionService.getAll();
            response.json(constructions);
        } catch (e) {
            response.status(500).json(e);
        }
    }

    async getOne(request, response) {
        try {
            const construction= await ConstructionService.getOne(request.params.id)
            response.json(construction);
        } catch (e) {
            response.status(500).json(e.message);
        }
    }

    async update(request, response) {
        try {
            const updatedConstruction= await ConstructionService.update(request.body);
            return response.json(updatedConstruction);
        } catch (e) {
            response.status(500).json(e.message);
        }
    }

    async delete(request, response) {
        try {
            const deletedConstruction= await ConstructionService.delete(request.params.id);
            return response.json(deletedConstruction);
        } catch (e) {
            response.status(500).json(e.message);
        }
    }

    async deleteAll(request, response){
        try{
            const constructions =await ConstructionService.deleteAll();
            return response.json(constructions);
        }catch (e) {
            response.status(500).json(e)
        }
    }
}

export default new ConstructionController();