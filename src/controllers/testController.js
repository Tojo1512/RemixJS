const express = require("express");
const router = express.Router();
const sequelize = require("../../app/orm/database");
const GenericRepository = require("../../app/orm/GenericRepository");
const GeneralRepository = require("../../app/orm/GeneralRepository");
const paths = require("../config/paths");
const ResponseHandler = require(paths.responseHandler);

const TestModel = sequelize.models.test; // Assurez-vous que le modèle TestModel est défini
const testModelRepository = new GenericRepository(TestModel);
const generalRepository = new GeneralRepository();

// GET ALL
router.get("/", async (req, res) => {
  const testModels = await testModelRepository.findAll();
  res.json(ResponseHandler.success(testModels, "all TestModels"));
});

// GET BY ID
router.get("/:id", async (req, res) => {
  const testModel = await testModelRepository.findById(req.params.id);
  res.json(ResponseHandler.success(testModel, "TestModel"));
});

// CREATE
router.post("/", async (req, res) => {
  const newTestModel = await testModelRepository.create(req.body);
  res.json(ResponseHandler.success(newTestModel, "new TestModel"));
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updatedTestModel = await testModelRepository.update(req.params.id, req.body);
  res.json(ResponseHandler.success(updatedTestModel, "updated TestModel"));
});

// DELETE
router.delete("/:id", async (req, res) => {
  const result = await testModelRepository.delete(req.params.id);
  res.json(ResponseHandler.success(result, "deleted TestModel"));
});

// GET WITH CONDITIONS
router.get("/conditions/active/:is_active", async (req, res) => {
  const testModels = await generalRepository.findWithConditions(TestModel, { is_active: req.params.is_active });
  res.json(ResponseHandler.success(testModels, "TestModels with conditions"));
});

// RAW QUERY
router.get("/raw/raw", async (req, res) => {
  const query = "SELECT * FROM test_models WHERE age > :age";
  const replacements = { age: 30 };
  const results = await generalRepository.executeRawQuery(query, replacements);
  res.json(ResponseHandler.success(results, "TestModels with raw query"));
});

module.exports = router; 