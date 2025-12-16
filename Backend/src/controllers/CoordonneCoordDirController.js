const { CoordonneCoordDir } = require("../models");

exports.getAllRelations = async (req, res, next) => {
  try {
    const data = await CoordonneCoordDir.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addRelation = async (req, res, next) => {
  try {
    const newRelation = await CoordonneCoordDir.create(req.body);
    res.status(201).json(newRelation);
  } catch (err) {
    next(err);
  }
};

exports.removeRelation = async (req, res, next) => {
  try {
    const { id_coordination, id_direction } = req.params;
    const relation = await CoordonneCoordDir.findOne({
      where: { id_coordination, id_direction }
    });
    if (!relation) return res.status(404).json({ message: "Relation introuvable" });
    await relation.destroy();
    res.json({ message: "Relation supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
