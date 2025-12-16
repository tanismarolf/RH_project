const express = require("express");
const router = express.Router();
const controller = require("../../controllers/PossedeServiceSectionController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_service/:id_section", controller.removeRelation);

module.exports = router;
