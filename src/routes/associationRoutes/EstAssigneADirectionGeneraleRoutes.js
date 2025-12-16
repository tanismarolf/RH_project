/*const express = require("express");
const router = express.Router();
const estAssigneADirectionGeneraleController = require("../controllers/EstAssigneADirectionGeneraleController");

// Récupérer toutes les relations Employé–Direction Générale
router.get("/", estAssigneADirectionGeneraleController.getAllRelations);

// Ajouter une relation
router.post("/", estAssigneADirectionGeneraleController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_direction_generale", estAssigneADirectionGeneraleController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneADirectionGeneraleController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_direction_generale", controller.removeRelation);

module.exports = router;

