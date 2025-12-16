const express = require("express");
const router = express.Router();
const controller = require("../../controllers/CoordonneCoordDirController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_coordination/:id_direction", controller.removeRelation);

module.exports = router;
