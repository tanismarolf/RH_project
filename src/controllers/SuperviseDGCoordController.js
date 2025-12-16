const { SuperviseDGCoord } = require("../models");

exports.getAllRelations = async (req, res, next) => {
  try {
    const data = await SuperviseDGCoord.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addRelation = async (req, res, next) => {
  try {
    const newRelation = await SuperviseDGCoord.create(req.body);
    res.status(201).json(newRelation);
  } catch (err) {
    next(err);
  }
};

exports.removeRelation = async (req, res, next) => {
  try {
    const { id_direction_general, id_coordination } = req.params;
    const relation = await SuperviseDGCoord.findOne({
      where: { id_direction_general, id_coordination }
    });
    if (!relation) return res.status(404).json({ message: "Relation introuvable" });
    await relation.destroy();
    res.json({ message: "Relation supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
