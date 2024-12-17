class GenericRepository {
    constructor(model) {
      this.model = model;
    }
  
    async findAll() {
      return await this.model.findAll();
    }
  
    async findById(id) {
      return await this.model.findByPk(id);
    }
  
    async create(data) {
      return await this.model.create(data);
    }
  
    async update(id, data) {
      const instance = await this.model.findByPk(id);
      if (instance) {
        return await instance.update(data);
      }
      return null;
    }
  
    async delete(id) {
      const instance = await this.model.findByPk(id);
      if (instance) {
        return await instance.destroy();
      }
      return null;
    }
  }
  
  module.exports = GenericRepository;