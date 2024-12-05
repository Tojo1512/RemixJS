const express = require("express");
const cors = require("cors");
const loadRoutes = require("./framework/routes/routeLoader");
const ResponseHandler = require("./framework/request/respondHandler");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

loadRoutes(app);

app.use((err, req, res, next) => {
  res.status(500).json(ResponseHandler.error(err.message));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
