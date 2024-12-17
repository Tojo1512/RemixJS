const fs = require('fs');
const path = require('path');
const sequelize = require('./database');

function generateModels() {
  const modelsPath = path.join(__dirname, '../../src/models');

  fs.readdirSync(modelsPath).forEach((file) => {
    if (file.endsWith("Model.js")) {
      const ModelClass = require(path.join(modelsPath, file));
      const modelName = file.replace("Model.js", "");
      sequelize.define(modelName, ModelClass.attributes, ModelClass.options);
      console.log(">>> " + modelName);
    }
  });
}

module.exports = generateModels; 