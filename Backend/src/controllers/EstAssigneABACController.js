const { EstAssigneABAC } = require("../models");

exports.getAllRelations = async (req, res, next) => {
  try {
    const data = await EstAssigneABAC.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addRelation = async (req, res, next) => {
  try {
    const newRelation = await EstAssigneABAC.create(req.body);
    res.status(201).json(newRelation);
  } catch (err) {
    next(err);
  }
};

exports.removeRelation = async (req, res, next) => {
  try {
    const { id_employe, id_bac } = req.params;
    const relation = await EstAssigneABAC.findOne({
      where: { id_employe, id_bac }
    });
    if (!relation) return res.status(404).json({ message: "Relation introuvable" });
    await relation.destroy();
    res.json({ message: "Relation supprimée avec succès" });
  } catch (err) {
    next(err);
  }
};
