const express = require("express");
const router = express.Router();
const controller = require("../../controllers/ContientDirServiceController");

router.get("/", controller.getAllRelations);
router.post("/", controller.addRelation);
router.delete("/:id_direction/:id_service", controller.removeRelation);

module.exports = router;
