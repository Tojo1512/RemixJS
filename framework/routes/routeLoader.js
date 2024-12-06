const fs = require("fs");
const path = require("path");
const express = require("express");

function loadRoutes(app) {
  const routesPath = path.join(__dirname, "../../src/controllers");
  
  fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith("Controller.js")) {
      const routeName = file.replace("Controller.js", "").toLowerCase();
      const route = require(path.join(routesPath, file));
      // verifier que la class n'est pas annotee
      try {
        new route();
        return;
      } catch (error) {
        console.log(">>> " + file.replace(".js", "") + " : ./" + routeName);
        app.use(`/api/${routeName}`, route);
      }
    }
  });
}

module.exports = loadRoutes;
