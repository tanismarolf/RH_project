const express = require("express");
const router = express.Router();
const controller = require("../../controllers/RegroupeDGStructureController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_direction_generale/:id_structure", controller.removeRelation);

module.exports = router;
