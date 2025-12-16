const express = require("express");
const router = express.Router();
const controller = require("../../controllers/EstAssigneAServiceController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_employe/:id_service", controller.removeRelation);

module.exports = router;
