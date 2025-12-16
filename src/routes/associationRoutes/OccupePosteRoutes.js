/*const express = require("express");
const router = express.Router();
const occupePosteController = require("../controllers/OccupePosteController");

// Récupérer toutes les relations Employé–Poste
router.get("/", occupePosteController.getAllRelations);

// Ajouter une relation
router.post("/", occupePosteController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_poste", occupePosteController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/OccupePosteController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_poste", controller.removeRelation);

module.exports = router;