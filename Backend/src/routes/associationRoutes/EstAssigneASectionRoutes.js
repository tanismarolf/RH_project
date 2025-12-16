/*const express = require("express");
const router = express.Router();
const estAssigneASectionController = require("../controllers/EstAssigneASectionController");

// Récupérer toutes les relations Employé–Section
router.get("/", estAssigneASectionController.getAllRelations);

// Ajouter une relation
router.post("/", estAssigneASectionController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_section", estAssigneASectionController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneASectionController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_section", controller.removeRelation);

module.exports = router;
