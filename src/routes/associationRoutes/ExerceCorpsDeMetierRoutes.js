/*const express = require("express");
const router = express.Router();
const exerceCorpsDeMetierController = require("../controllers/ExerceCorpsDeMetierController");

// Récupérer toutes les relations Employé–Corps de Métier
router.get("/", exerceCorpsDeMetierController.getAllRelations);

// Ajouter une relation
router.post("/", exerceCorpsDeMetierController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_corps_de_metier", exerceCorpsDeMetierController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/ExerceCorpsDeMetierController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_corps_de_metier", controller.removeRelation);

module.exports = router;

