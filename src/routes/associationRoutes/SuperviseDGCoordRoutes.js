const express = require("express");
const router = express.Router();
const controller = require("../../controllers/SuperviseDGCoordController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_direction_generale/:id_coordination", controller.removeRelation);

module.exports = router;
