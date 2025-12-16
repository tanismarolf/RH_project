/*const express = require("express");
const router = express.Router();
const estAssigneABACController = require("../controllers/EstAssigneABACController");

// Récupérer toutes les relations Employé–BAC
router.get("/", estAssigneABACController.getAllRelations);

// Ajouter une relation
router.post("/", estAssigneABACController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_BAC", estAssigneABACController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneABACController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_bac", controller.removeRelation);

module.exports = router;

