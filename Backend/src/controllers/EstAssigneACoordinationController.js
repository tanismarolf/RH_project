const { EstAssigneACoordination } = require("../models");

exports.getAllRelations = async (req, res, next) => {
  try {
    const data = await EstAssigneACoordination.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addRelation = async (req, res, next) => {
  try {
    const newRelation = await EstAssigneACoordination.create(req.body);
    res.status(201).json(newRelation);
  } catch (err) {
    next(err);
  }
};

exports.removeRelation = async (req, res, next) => {
  try {
    const { id_employe, id_coordination } = req.params;
    const relation = await EstAssigneACoordination.findOne({
      where: { id_employe, id_coordination }
    });
    if (!relation) return res.status(404).json({ message: "Relation introuvable" });
    await relation.destroy();
    res.json({ message: "Relation supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
