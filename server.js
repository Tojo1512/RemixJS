const express = require("express");
const cors = require("cors");
const loadRoutes = require("./app/routes/routeLoader");
const generateModels = require("./app/orm/modelGenerator");
const ResponseHandler = require("./app/request/respondHandler");
const loadAnnotatedRoutes = require("./app/routes/annotationRouteLoader");
const dotenv = require("dotenv");
const isDev = process.env.NODE_ENV === 'development';

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
  if (isDev) {
    console.log("> Running in development mode with auto-reload enabled");
  }
});
