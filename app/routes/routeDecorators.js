function Controller(prefix) {
  return function (constructor) {
    constructor.prefix = prefix;
  };
}

function Route(method, path) {
  return function (target, key, descriptor) {
    if (!target.constructor.routes) {
      target.constructor.routes = [];
    }
    target.constructor.routes.push({ method, path, handler: descriptor.value });
  };
}

function Get(path) {
  return Route('get', path);
}

function Post(path) {
  return Route('post', path);
}

function Put(path) {
  return Route('put', path);
}

function Delete(path) {
  return Route('delete', path);
}

module.exports = { Controller, Get, Post, Put, Delete };
