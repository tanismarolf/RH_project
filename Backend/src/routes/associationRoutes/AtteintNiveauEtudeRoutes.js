/*const express = require("express");
const router = express.Router();
const atteintNiveauEtudeController = require("../../controllers/AtteintNiveauEtudeController");

// Récupérer toutes les relations Employé–Niveau Étude
router.get("/", atteintNiveauEtudeController.getAllRelations);

// Ajouter une relation
router.post("/", atteintNiveauEtudeController.addRelation);

// Supprimer une relation
router.delete("/:id_employe/:id_niveau_etude", atteintNiveauEtudeController.removeRelation);

module.exports = router;*/
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/AtteintNiveauEtudeController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_niveau_etude", controller.removeRelation);

module.exports = router;
