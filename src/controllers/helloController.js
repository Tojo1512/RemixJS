const express = require("express");
const router = express.Router();
const paths = require("../config/paths");
const ResponseHandler = require(paths.responseHandler);

router.get("/", (req, res) => {
  res.json(ResponseHandler.success({ message: "Bonjour monde!" }));
});

router.get("/:name", (req, res) => {
  res.json(ResponseHandler.success({ message: `Bonjour ${req.params.name}!` }));
});

module.exports = router;
