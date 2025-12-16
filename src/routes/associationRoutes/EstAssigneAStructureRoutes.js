/*const express = require("express");
const router = express.Router();
const estAssigneAStructureController = require("../controllers/EstAssigneAStructureController");

// Récupérer toutes les relations Employé–Structure
router.get("/", estAssigneAStructureController.getAllRelations);

// Ajouter une relation
router.post("/", estAssigneAStructureController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_structure", estAssigneAStructureController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneAStructureController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_structure", controller.removeRelation);

module.exports = router;

