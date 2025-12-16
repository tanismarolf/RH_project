/*const express = require("express");
const router = express.Router();
const estAssigneADirectionController = require("../controllers/EstAssigneADirectionController");

// Récupérer toutes les relations Employé–Direction
router.get("/", estAssigneADirectionController.getAllRelations);

// Ajouter une relation
router.post("/", estAssigneADirectionController.addRelation);

// Supprimer une relation (clé composite)
router.delete("/:id_employe/:id_direction", estAssigneADirectionController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneADirectionController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_direction", controller.removeRelation);

module.exports = router;

