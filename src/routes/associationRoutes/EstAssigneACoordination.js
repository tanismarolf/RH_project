/*const express = require("express");
const router = express.Router();
const estAssigneACoordinationController = require("../controllers/EstAssigneACoordinationController");

// Récupérer toutes les relations Employé–Coordination
router.get("/", estAssigneACoordinationController.getAllRelations);

// Ajouter une relation
router.post("/", estAssigneACoordinationController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_coordination", estAssigneACoordinationController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneACoordinationController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_coordination", controller.removeRelation);

module.exports = router;

