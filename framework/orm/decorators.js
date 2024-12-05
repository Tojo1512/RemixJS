function Column(type, options = {}) {
  return function (target, key) {
    if (!target.constructor.attributes) {
      target.constructor.attributes = {};
    }
    target.constructor.attributes[key] = { type, ...options };
  };
}

function Table(options = {}) {
  return function (constructor) {
    constructor.options = options;
  };
}

module.exports = { Column, Table }; 