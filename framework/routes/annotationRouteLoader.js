const express = require("express");
const path = require("path");
const fs = require("fs");

function loadAnnotatedRoutes(app) {
  const controllersPath = path.join(__dirname, "../../src/controllers");
  
  fs.readdirSync(controllersPath).forEach((file) => {
    if (file.endsWith("Controller.js")) {
      const ControllerClass = require(path.join(controllersPath, file));
      //verifier que l'on peut appeler new ControllerClass()
      try {
        new ControllerClass();
      } catch (error) {
        return;
      }

      const controllerInstance = new ControllerClass();
      const router = express.Router();

      if (ControllerClass.routes && Array.isArray(ControllerClass.routes)) {
        ControllerClass.routes.forEach(route => {
          if (route.method && route.path && typeof route.handler === 'function') {
            router[route.method](route.path, route.handler.bind(controllerInstance));
          } else {
            console.warn(`Invalid route configuration in ${file}:`, route);
          }
        });
      } else {
        console.warn(`No valid routes found in ${file}`);
      }

      const prefix = ControllerClass.prefix || '';
      console.log(`>>> ${file.replace(".js", "")} : .${prefix}`);
      app.use(`/api${prefix}`, router);
    }
  });
}

module.exports = loadAnnotatedRoutes; 