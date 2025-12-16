const express = require("express");
const router = express.Router();
const SalaireController = require("../controllers/SalaireController");

// Routes CRUD
router.get("/", SalaireController.getAll);
router.get("/:id", SalaireController.getById);
router.post("/", SalaireController.create);
router.put("/:id", SalaireController.update);
router.delete("/:id", SalaireController.delete);

module.exports = router;
