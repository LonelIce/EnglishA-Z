import Constuction from "../shemas/Constuction.js";

class ConstructionService {
    async create(construction) {
        const newConstruction = await Constuction.create(construction);
        return newConstruction
    }

    async getAll() {
        const constructions = await Constuction.find();
        return constructions;
    }

    async getOne(id) {
        if (!id) throw new Error('Id не указан');
        const construction = await Constuction.findById(id);
        return construction
    }

    async update(construction) {
        if (!construction._id) throw new Error('Id не указан');
        const updatedConstruction = Constuction.findByIdAndUpdate(construction._id, construction, {new: true});
        return updatedConstruction;
    }

    async delete(id){
        if (!id) throw new Error('Id не указан');
        const deletedConstruction= Constuction.findByIdAndDelete(id);
        return deletedConstruction;
    }

    async deleteAll(){
        const deletedConstructions=Constuction.deleteMany({});
        return deletedConstructions;
    }

}

export default new ConstructionService();