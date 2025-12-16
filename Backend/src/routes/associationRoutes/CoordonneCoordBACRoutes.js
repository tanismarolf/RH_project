const express = require("express");
const router = express.Router();
const controller = require("../../controllers/CoordonneCoordBACController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_coordination/:id_bac", controller.removeRelation);

module.exports = router;
