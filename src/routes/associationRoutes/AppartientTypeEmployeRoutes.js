/*const express = require("express");
const router = express.Router();
const appartientTypeEmployeController = require("../../controllers/AppartientTypeEmployeController");

// Récupérer toutes les relations Employé–Type Employé
router.get("/", appartientTypeEmployeController.getAllRelations);

// Ajouter une relation
router.post("/", appartientTypeEmployeController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_type_employe", appartientTypeEmployeController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/AppartientTypeEmployeController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_type_employe", controller.removeRelation);

module.exports = router;

