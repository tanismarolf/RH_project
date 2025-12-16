const express = require("express");
const router = express.Router();
const NoteEmployeController = require("../controllers/NoteEmployeController");

// Routes CRUD
router.get("/", NoteEmployeController.getAll);
router.get("/:id", NoteEmployeController.getById);
router.post("/", NoteEmployeController.create);
router.put("/:id", NoteEmployeController.update);
router.delete("/:id", NoteEmployeController.delete);

module.exports = router;
