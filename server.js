const express = require("express");
const cors = require("cors");
const loadRoutes = require("./framework/routes/routeLoader");
const generateModels = require("./framework/orm/modelGenerator");
const ResponseHandler = require("./framework/request/respondHandler");
const loadAnnotatedRoutes = require("./framework/routes/annotationRouteLoader");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Generate models
console.log("> Generated models");
generateModels();

// Load routes
console.log(" ");
console.log("> Routes list :");
if (process.env.AUTO_LOAD_ROUTES === "true") {
  loadRoutes(app);
}
loadAnnotatedRoutes(app);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json(ResponseHandler.error(err.message));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(" ");
  console.log(`> Server started on port ${PORT}`);
});
