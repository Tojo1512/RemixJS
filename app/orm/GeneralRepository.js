const sequelize = require('./database');

class GeneralRepository {
  constructor() {
    this.sequelize = sequelize;
  }

  async findWithConditions(model, conditions = {}, options = {}) {
    return await model.findAll({
      where: conditions,
      ...options,
    });
  }

  async executeRawQuery(query, replacements = {}) {
    return await this.sequelize.query(query, {
      replacements,
      type: this.sequelize.QueryTypes.SELECT,
    });
  }

  async updateWithConditions(model, values, conditions = {}) {
    return await model.update(values, {
      where: conditions,
    });
  }

  async deleteWithConditions(model, conditions = {}) {
    return await model.destroy({
      where: conditions,
    });
  }
}

module.exports = GeneralRepository;